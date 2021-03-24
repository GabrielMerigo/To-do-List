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

todosContainer.addEventListener('click', removeTodo)

searchInput.addEventListener('input', event => {
  const inputValue = event.target.value.trim().toLowerCase()

  Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(li => {
      li.classList.remove('d-block')
      li.classList.add('hidden')
    })

  Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(li => {
      li.classList.remove('hidden')
      li.classList.add('d-block')
    })
})


const removeTodo = event => {
  const thereIsClassDelete = event.target.className.includes('delete');

  if (thereIsClassDelete) {
    const li = document.querySelector('.delete');
    todosContainer.removeChild(li.parentElement)
  }
}