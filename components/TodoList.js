function TodoList(todoList, todos) {
  if (!(this instanceof TodoList)) {
    throw new Error("error: TodoList must be called with new!");
  }

  this.$todoList = todoList;
  this.todos = todos;

  this.render = () => {
    const itemlist = this.todos
      .map(
        (item) =>
          `<li>
          <div class="view">
          <input class="toggle" type="checkbox" /> <label>${item.content} </label> <button class="destroy"></button>
          </div>
          </li>`
      )
      .join("");
    this.$todoList.innerHTML = itemlist;
  };

  this.setState = (item) => {
    this.todos = item;
    this.render();
  };
  this.render();
}

export default TodoList;
