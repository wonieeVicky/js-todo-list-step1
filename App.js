import TodoInput from "./components/TodoInput.js";

function App() {
  if (!(this instanceof App)) {
    throw new Error("error: App must be called with new!");
  }

  this.todos = [];

  const onAdd = (todo) => {
    const originTodos = this.todos;
    const newTodos = [...originTodos, { content: todo, isCompleted: false }];
    this.setState(newTodos);
  };

  this.setState = (newData) => {
    this.todos = newData;
    this.render();
  };

  this.render = () => {
    // this.todoList.setState(this.todos);
  };

  this.init = () => {
    this.$input = document.querySelector("#new-todo-title");

    this.todoInput = new TodoInput(this.$input, { onAction: { add: onAdd } });
  };

  this.init();
}

new App();
