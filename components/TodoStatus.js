function TodoStatus(element, todos, { onAction }) {
  if (!(this instanceof TodoStatus)) {
    throw new Error("error: TodoStatus must be called with new!");
  }

  this.$filter = element;
  this.todos = todos;
  this.onAction = onAction;

  this.$filter.addEventListener("click", (e) => {
    const { className } = e.target;

    // all, active, completed
    this.$filter.querySelector(".selected").classList.remove("selected");
    this.$filter.querySelector(`.${className}`).classList.add("selected");
    onAction.setStatus(`${className}`);
  });
}

export default TodoStatus;

// git checkout -b -b wonieeVicky-adf
