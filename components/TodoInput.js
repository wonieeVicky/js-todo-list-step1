import { ENTER_KEY_CODE } from "../utils/contantKeys.js";

function TodoInput(element, { onAction }) {
  if (!(this instanceof TodoInput)) {
    throw new Error("error: TodoInput must be called with new!");
  }

  this.$target = element;
  this.onAction = onAction;

  this.$target.addEventListener("keyup", (e) => {
    const {
      target: { value },
      keyCode,
    } = e;
    if (value && keyCode === ENTER_KEY_CODE) {
      this.onAction.add(value);
    }
  });
}

export default TodoInput;
