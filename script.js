const availableFields = document.getElementById("availableFields");
const displayFields = document.getElementById("displayFields");
data
  .sort((a, b) => b.popularity - a.popularity)
  .forEach((item) => {
    const option = document.createElement("option");
    option.value = item.title;
    option.textContent = item.title;
    availableFields.appendChild(option);
  });

function updateDisplayFields() {
  displayFields.innerHTML = "";
  Array.from(availableFields.options).forEach((option) => {
    if (option.selected) {
      const clone = option.cloneNode(true);
      displayFields.appendChild(clone);
    }
  });
  displayData();
}

document
  .getElementById("addToDisplay")
  .addEventListener("click", updateDisplayFields);
document
  .getElementById("removeFromDisplay")
  .addEventListener("click", updateDisplayFields);

function displayData() {
  const table = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  table.innerHTML = "";
  data
    .sort((a, b) => b.popularity - a.popularity)
    .forEach((item) => {
      const row = table.insertRow();
      Array.from(displayFields.options).forEach((field) => {
        const cell = row.insertCell();
        cell.textContent = item[field.value];
      });
    });
}

updateDisplayFields();
