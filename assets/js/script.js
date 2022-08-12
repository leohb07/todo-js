let listWrapperElement = document.querySelector('#root ul');
let inputElement = document.querySelector('#root input');
let buttonElement = document.querySelector('#root button');

let todos = [];

function renderTodos() {
  listWrapperElement.innerHTML = ''; // toda vez que renderizar, vai limpar os dados.

  for (todo of todos) {
    let listElement = document.createElement('li');
    let listTextElement = document.createTextNode(todo);

    let linkElement = document.createElement('a');    
    linkElement.setAttribute('href', '#');

    let position = todos.indexOf(todo);
    linkElement.setAttribute(`onclick`, `deleteTodos(${position})`);

    let linkTextElement = document.createTextNode('Excluir');
    linkElement.appendChild(linkTextElement);
    
    listElement.appendChild(listTextElement);
    listElement.appendChild(linkElement);
    listWrapperElement.appendChild(listElement);
  }
}

renderTodos();

function addTodos() {
  let getValueInputText = inputElement.value;
  todos.push(getValueInputText);
  inputElement.value = '';

  renderTodos();
}

buttonElement.onclick = addTodos;

function deleteTodos(positionArray) { 
  todos.splice(positionArray, 1);
  renderTodos();
}