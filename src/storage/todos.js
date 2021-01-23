export const getTodos = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

export const addTodo = (todo) => {
  localStorage.setItem("todos", JSON.stringify([
    ...getTodos(),
    {text: todo, completed: false}
  ]));
}

export const remove = (key) => {
  localStorage.removeItem(key)
};

