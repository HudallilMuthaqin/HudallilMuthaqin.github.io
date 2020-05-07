var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData(){
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Day"] = document.getElementById("Day").value;
    formData["Time"] = document.getElementById("Time").value;
    formData["Doctor"] = document.getElementById("Doctor").value;
    formData["Message"] = document.getElementById("Message").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0]
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Day;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Time;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Doctor;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.Message;
    cell1 = newRow.insertCell(6);
    cell1.innerHTML = `<a onClick= "onEdit(this)">Edit /</a>
                        <a onClick= "onDelete(this)">Delete<a/>`;

}

function resetForm(){
    document.getElementById("Name").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Day").value = "";
    document.getElementById("Time").value = "";
    document.getElementById("Doctor").value = "";
    document.getElementById("Message").value = ""; 
    selectedRow = null  
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Day").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Time").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Doctor").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Message").value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.Email;
    selectedRow.cells[2].innerHTML = formData.Day;
    selectedRow.cells[3].innerHTML = formData.Time;
    selectedRow.cells[4].innerHTML = formData.Doctor;
    selectedRow.cells[5].innerHTML = formData.Message;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("Name").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}