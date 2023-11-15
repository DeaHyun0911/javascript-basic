const addValue = document.getElementById("to-do-form");

function Todo() {
  localStorage.setItem(addValue.value);
  console.log(addValue.value);
}