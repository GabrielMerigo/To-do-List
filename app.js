const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const searchInput = document.querySelector('.form-search input')

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()

  const input = event.target.add.value.trim()
  if (input.length) {
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${input}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `
    event.target.reset()
  }
})

todosContainer.addEventListener('click', event => {
  if(event.target.className === 'far fa-trash-alt delete'){
    //OR Array.from(event.target.classList).includes('delete')
    const li = event.target.parentElement;
    todosContainer.removeChild(li)
  }
})

searchInput.addEventListener('input', event => {
  const inputValue = event.target.value.trim();
  
  const filteredLis = Array.from(todosContainer.children).filter(todo => {
    return todo.textContent.includes(inputValue)
  })

  console.log(filteredLis);
})