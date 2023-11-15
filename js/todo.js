let input = document.querySelector('.input');
let button = document.querySelector('.add-btn')
let toDos = localStorage.getItem('item')
let newToDos = JSON.parse(toDos) || [];

updateToDoList();

button.addEventListener('click', function (e) {
  let value = input.value
  let todoItem = localStorage.getItem('item');

  if (value !== "") {
    todoItem = todoItem ? JSON.parse(todoItem) : [];

    todoItem.push(value)

    const NewArr = JSON.stringify(todoItem)

    localStorage.setItem('item', NewArr)

    updateToDoList();
  } else {
    alert('내용을 적어주세요.')
  }

})

function updateToDoList() {
  $('.list').html("");

  newToDos.forEach((data, i) => {
    $('.list').append(`
    <li>
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


$('.remove').on('click', function () {
  this.closest('li').remove()
  const clickItem = $(this).parent().siblings('.item').text()

  if (newToDos.includes(clickItem)) {
    newToDos = newToDos.filter(item => item !== clickItem);
  }

  const NewArr = JSON.stringify(newToDos)
  localStorage.setItem('item', NewArr)

  console.log(newToDos)
})

// function removeItem(e) {

//   const clickItem = $(e.target).siblings('.item ').html()

//   let todoItem = localStorage.getItem('item');
//   todoItem = JSON.parse(todoItem)

//   if (todoItem.includes(clickItem)) {
//     todoItem = todoItem.filter(item => item !== clickItem);
//   }

//   const NewArr = JSON.stringify(todoItem)

//   localStorage.setItem('item', NewArr)

//   updateToDoList();

//   $(e.target).closest('li').remove();

//   newToDos = todoItem;
// }