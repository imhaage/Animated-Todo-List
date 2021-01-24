export const getPersistedTodos = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

export const persistTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
}
