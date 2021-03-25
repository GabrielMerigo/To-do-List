const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const searchInput = document.querySelector('.form-search input')

const insertTodoIntoDOM = event => {
  event.preventDefault()

  const input = event.target.add.value.trim()
  const HTMLtemplate = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${input}</span>
      <i class="far fa-trash-alt delete"></i>
  </li>
  `;

  if (input.length) {
    todosContainer.innerHTML += HTMLtemplate;
    event.target.reset()
  }
}

const removeTodo = event => {
  const classTarget = event.target.className;
  const liRemoved = event.target.parentElement

  if (classTarget.includes('delete')) {
    todosContainer.removeChild(liRemoved)
  }
}

const removeTodoInputSearch = (todosChildren, inputValue) => {
  Array.from(todosChildren)
    .filter(todo => {
      const includesValueInput = todo.textContent
        .toLowerCase()
        .includes(inputValue)

      return includesValueInput
    })
    .forEach(li => li.classList.remove('hidden'))
}

const addTodoInputSearch = (todosChildren, inputValue) => {
  Array.from(todosChildren)
  .filter(todo => {
    const notIncludesValueInput = todo.textContent
      .toLowerCase()
      .includes(inputValue)

    return !notIncludesValueInput
  }).forEach(li => li.classList.add('hidden'))
} 

const validationSearchInputValue = event => {
  const inputValue = event.target.value.trim().toLowerCase()
  const todosChildren = todosContainer.children;

  removeTodoInputSearch(todosChildren, inputValue)
  addTodoInputSearch(todosChildren, inputValue)
}

formAddTodo.addEventListener('submit', insertTodoIntoDOM)
todosContainer.addEventListener('click', removeTodo)
searchInput.addEventListener('input', validationSearchInputValue)