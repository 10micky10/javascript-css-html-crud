function onFormSubmit() {
  setUpStorageUsers();
  let edit = localStorage.getItem("edit");
  let userFormData = readRegisterUserForm();
  let arrayUsers = getDataLocalStorage("arrayUsers");
  if (edit == "true"){
    localStorage.setItem("edit", "false");
    let editDataUser = getDataLocalStorage("editDataUser");
    if(validateUser(userFormData)) {
      arrayUsers.splice(editDataUser.index, 1, userFormData);
      saveDataLocalStorage("arrayUsers", arrayUsers);
    } else {
      alert("write in all resources");
    }
    let nameAlertEdit = editDataUser.name;
    let indexAlertEdit = editDataUser.index;
    alert("Edited: Id: " + indexAlertEdit + " Name: " + nameAlertEdit + " To: Id: " + indexAlertEdit + " Name " + userFormData.name);
    location.href = "show-table-user.html";
  } else {
    if (validateUser(userFormData)){
      arrayUsers.push(userFormData);
      saveDataLocalStorage("arrayUsers", arrayUsers);
      console.log(arrayUsers);
      let nameAlertRegister = userFormData.name;
      alert("Registered Done " + nameAlertRegister);
      location.href = "show-table-user.html";
      cleanRegisterUserForm();
    } else {
      alert("write in all resources");
    }
  }
}

function readRegisterUserForm() {
  var userFormData = {};
  userFormData["dni"] = document.getElementById("dni").value;
  userFormData["name"] = document.getElementById("name").value;
  userFormData["fatherLastName"] = document.getElementById("father-last-name").value;
  userFormData["motherLastName"] = document.getElementById("mother-last-name").value;
  userFormData["telephone"] = document.getElementById("telephone").value;
  userFormData["adress"] = document.getElementById("adress").value;
  userFormData["nickname"] = document.getElementById("nickname").value;
  userFormData["email"] = document.getElementById("email").value;
  userFormData["password"] = document.getElementById("password").value;
  userFormData["birthday"] = document.getElementById("birthday").value;
  userFormData["type"] = document.getElementById("type").value;
  return userFormData;
}

function validateUser(userFormData) {
  if (userFormData.dni === "") {
    return false;
  } else if (userFormData.name === "") {
    return false;
  } else if (userFormData.fatherLastName === "") {
    return false;
  } else if (userFormData.motherLastName === "") {
    return false;
  } else if (userFormData.telephone === "") {
    return false;
  } else if (userFormData.email === "") {
    return false;
  } else if (userFormData.password === "") {
    return false;
  } else if (userFormData.birthday === "") {
    return false;
  } else if (userFormData.type === "") {
    return false;
  } else {
    return true;
  }
}

function cleanRegisterUserForm() {
  document.getElementById("dni").value = "";
  document.getElementById("name").value = "";
  document.getElementById("father-last-name").value = "";
  document.getElementById("mother-last-name").value = "";
  document.getElementById("telephone").value = "";
  document.getElementById("adress").value = "";
  document.getElementById("nickname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("birthday").value = "";
  document.getElementById("type").value = "";
}

function uploadFormRegisterIfEdit() {
  cleanRegisterUserForm();
  let editDataUser = getDataLocalStorage("editDataUser");
  let edit = localStorage.getItem("edit");
  if (edit == "true") {
    document.getElementById("dni").value = editDataUser.dni;
    document.getElementById("name").value = editDataUser.name;
    document.getElementById("father-last-name").value = editDataUser.fatherLastName;
    document.getElementById("mother-last-name").value = editDataUser.motherLastName;
    document.getElementById("telephone").value = editDataUser.telephone;
    document.getElementById("adress").value = editDataUser.adress;
    document.getElementById("nickname").value = editDataUser.nickname;
    document.getElementById("email").value = editDataUser.email;
    document.getElementById("password").value = editDataUser.password;
    document.getElementById("birthday").value = editDataUser.birthday;
    document.getElementById("type").value = editDataUser.type;
  }
}
