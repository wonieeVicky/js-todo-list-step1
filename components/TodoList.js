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
              <label class='label'>${todo.content}</label>
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
    if (className === "destroy" && nodeName === "BUTTON") {
      const idx = e.target.closest("li").dataset.idx;
      this.onAction.remove(idx);
    }
  });

  this.$todoList.addEventListener("dblclick", (e) => {
    const { className, nodeName } = e.target;
    if (className === "label" && nodeName === "LABEL") {
      //e.target.closest("li").classList.add("editing");
      const $li = e.target.closest("li");
      $li.classList.add("editing");
      const $input = $li.querySelector("input.edit");
      $input.focus();
      $input.setSelectionRange($input.value.length, $input.value.length);
      this.originValue = $input.value; // escape
    }
  });
}

export default TodoList;
