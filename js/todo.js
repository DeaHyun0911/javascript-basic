let input = document.querySelector('.input');
let button = document.querySelector('.add-btn')
let toDos = localStorage.getItem('item')
let newToDos = JSON.parse(toDos) || [];

updateToDoList();

button.addEventListener('click', function (e) {
  e.preventDefault();
  let value = input.value
  let todoItem = localStorage.getItem('item');

  if (value !== "") {
    todoItem = todoItem ? JSON.parse(todoItem) : [];

    todoItem.push(value)

    const NewArr = JSON.stringify(todoItem)

    localStorage.setItem('item', NewArr)

    newToDos = todoItem;

    updateToDoList();

    input.value = "";
  } else {
    alert('내용을 적어주세요.')
  }

})

function updateToDoList() {
  $('.list').html("");

  newToDos.forEach((data, i) => {
    $('.list').append(`
    <li data-id="${i}">
      <span class="item">${data}</span>
      <div class="left">
        <a class="remove">
          <i class="fa-solid fa-x"></i>
        </a>
      </div>
    </li>
    `);
  });

}


$('.list').on('click', '.remove', function () {

  const list = $(this).closest('li');
  const listId = list.data('id');

  console.log(listId)

  list.remove();

  if (newToDos[listId]) {
    newToDos.splice(listId, 1);
  }

  const NewArr = JSON.stringify(newToDos);
  localStorage.setItem('item', NewArr);
});

