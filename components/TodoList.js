function TodoList(todoList, todos, { onAction }) {
  if (!(this instanceof TodoList)) {
    throw new Error("error: TodoList must be called with new!");
  }

  this.$todoList = todoList;
  this.todos = todos;
  this.onAction = onAction;

  this.setState = (item) => {
    this.todos = item;
    this.render();
  };

  this.render = () => {
    if (!this.todos.length) return;
    const itemlist = this.todos
      .map(
        (todo, idx) =>
          `<li data-idx=${idx} class=${todo.isCompleted ? "completed" : ""}>
            <div class="view">
              <input class="toggle" type="checkbox" ${
                todo.isCompleted ? "checked" : ""
              } />
              <label>${todo.content}</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" value="${todo.content}" />
          </li>`
      )
      .join("");

    this.$todoList.innerHTML = itemlist;
  };

  this.render();

  this.$todoList.addEventListener("click", (e) => {
    const { className, nodeName } = e.target;

    if (className === "toggle" && nodeName === "INPUT") {
      const idx = e.target.closest("li").dataset.idx;
      this.onAction.toggle(idx);
    }
  });
}

export default TodoList;
