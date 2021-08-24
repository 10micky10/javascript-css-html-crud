function updateTableUser() {
  setUpStorageUsers();
  let index = 0;
  let arrayUsers = getDataLocalStorage("arrayUsers");
  console.log(arrayUsers);
  for (user of arrayUsers) {
    insertRow(user, index);
    index++;
  }
}

function onEdit(button) {
  selectedRow = button.parentElement.parentElement;
  let nameFromConfirm = selectedRow.cells[2].innerHTML;
  if(confirm("Edit " + nameFromConfirm + "?")) {
    let index = selectedRow.cells[0].innerHTML;
    let dni = selectedRow.cells[1].innerHTML;
    let name = selectedRow.cells[2].innerHTML;
    let fatherLastName = selectedRow.cells[3].innerHTML;
    let motherLastName = selectedRow.cells[4].innerHTML;
    let telephone = selectedRow.cells[5].innerHTML;
    let adress = selectedRow.cells[6].innerHTML;
    let nickname = selectedRow.cells[7].innerHTML;
    let email = selectedRow.cells[8].innerHTML;
    let password = selectedRow.cells[9].innerHTML;
    let birthday = selectedRow.cells[10].innerHTML;
    let type = selectedRow.cells[11].innerHTML;
    let userData = {};
    userData["index"] = index;
    userData["dni"] = dni;
    userData["name"] = name;
    userData["fatherLastName"] = fatherLastName;
    userData["motherLastName"] = motherLastName;
    userData["telephone"] = telephone;
    userData["adress"] = adress;
    userData["nickname"] = nickname;
    userData["email"] = email;
    userData["password"] = password;
    userData["birthday"] = birthday;
    userData["type"] = type;
    saveDataLocalStorage("editDataUser", userData);
    localStorage.setItem("edit", "true");
    // navigate to user form.
    location.href = "register-user.html";
  }
}

function onDelete(button) {
  selectedRow = button.parentElement.parentElement;
  let index = selectedRow.cells[0].innerHTML;
  let name = selectedRow.cells[2].innerHTML;
  if (confirm("Eliminate id: " + index + " Name: " + name + "?")) {
    let index = selectedRow.cells[0].innerHTML;
    let arrayUsers = getDataLocalStorage("arrayUsers");
    arrayUsers.splice(index, 1);
    saveDataLocalStorage("arrayUsers", arrayUsers);
    location.reload();
  }
}

function insertRow(user, index) {
  var table = document.getElementById("user-table");
  var newRow = table.insertRow(table.length);
  
  cellIndex = newRow.insertCell(0);
  cellIndex.innerHTML = index;
  index++;

  cellDni = newRow.insertCell(1);
  cellDni.innerHTML = user.dni;

  cellName = newRow.insertCell(2);
  cellName.innerHTML = user.name;

  cellFatherLastName = newRow.insertCell(3);
  cellFatherLastName.innerHTML = user.fatherLastName;

  cellMotherLastName = newRow.insertCell(4);
  cellMotherLastName.innerHTML = user.motherLastName;

  cellTelephone = newRow.insertCell(5);
  cellTelephone.innerHTML = user.telephone;

  cellAdress = newRow.insertCell(6);
  cellAdress.innerHTML = user.adress;

  cellNickname = newRow.insertCell(7);
  cellNickname.innerHTML = user.nickname;

  cellEmail = newRow.insertCell(8);
  cellEmail.innerHTML = user.email;

  cellPassword = newRow.insertCell(9);
  cellPassword.innerHTML = user.password;

  cellBirthday = newRow.insertCell(10);
  cellBirthday.innerHTML = user.birthday;

  cellType = newRow.insertCell(11);
  cellType.innerHTML = user.type;

  cellEdit = newRow.insertCell(12);
  cellEdit.innerHTML = '<button onclick="onEdit(this)" class="buttons">Edit</button>';

  cellDelete = newRow.insertCell(13);
  cellDelete.innerHTML = '<button onclick="onDelete(this)" class="buttons">Delete</button>';
}
