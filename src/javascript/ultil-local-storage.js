function saveDataLocalStorage(variableName, data) {
  let stringifyArray = JSON.stringify(data);
  localStorage.setItem(variableName, stringifyArray);
}

function getDataLocalStorage(variableName) {
  let data = localStorage.getItem(variableName);
  let dataJsonFormat = JSON.parse(data);
  return dataJsonFormat;
}

function setUpStorageUsers() {
  let array = localStorage.getItem("arrayUsers");
  if (array === null /*|| array.length == 2*/) {
    localStorage.setItem("edit", "false");
    let arrayUsers = [];
    saveDataLocalStorage("arrayUsers", arrayUsers);
  }
}
