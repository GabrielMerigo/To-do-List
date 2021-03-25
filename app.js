const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const searchInput = document.querySelector('.form-search input')

const insertTodoIntoDOM = event => {
  event.preventDefault()

  const input = event.target.add.value.trim()
  const HTMLtemplate = `
  <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${input}">
      <span>${input}</span>
      <i class="far fa-trash-alt" data-trash="${input}"></i>
  </li>
  `;

  if (input.length) {
    todosContainer.innerHTML += HTMLtemplate;
    event.target.reset()
  }
}

const removeTodo = event => {
  const classTarget = event.target;
  const trashDataValue = classTarget.dataset.trash;
  const li = document.querySelector(`[data-todo="${trashDataValue}"]`)

  if (trashDataValue) {
    li.remove()
  }
}

const filterTodos = (arrayValues, inputValue, returnMatchedTodos) => arrayValues
  .filter(todo => {
    const matchedTodos = todo.textContent.toLowerCase().includes(inputValue)
    return returnMatchedTodos ? matchedTodos : !matchedTodos
  })


const hideTodos = (arrayValues, inputValue) => {
  filterTodos(arrayValues, inputValue, false)
    .forEach(li => li.classList.add('hidden'))
}

const showTodos = (arrayValues, inputValue) => {
  filterTodos(arrayValues, inputValue, true)
    .forEach(li => li.classList.remove('hidden'))
}

const validationSearchInputValue = event => {
  const inputValue = event.target.value.trim().toLowerCase()
  const arrayValues = Array.from(todosContainer.children);

  hideTodos(arrayValues, inputValue)
  showTodos(arrayValues, inputValue)
}

formAddTodo.addEventListener('submit', insertTodoIntoDOM)
todosContainer.addEventListener('click', removeTodo)
searchInput.addEventListener('input', validationSearchInputValue)