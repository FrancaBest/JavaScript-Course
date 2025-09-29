
/* Steps (Algorithm)
1. Loop through the array
2. Create some HTML code for each todo. Put the HTML on web page

*Main idea of javaScript
1. Save the data
2. Generate the HTML
3. Make it interactive*/

const todoList = [{
  name: 'Do some project',
  dueDate: '2025-25-08'
},
{
  name: 'Go shopping',
  dueDate: '2025-25-08' 
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate} = todoObject
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
   .innerHTML = todoListHTML;
}

/* Steps(Algorithm)
1. Create array to store todos
2. When we click "Add",
3. Get text from textbox
4. Add it to array
5. console.log() the array
*/
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate
  });
  
  
  inputElement.value = '';

  renderTodoList();
}

