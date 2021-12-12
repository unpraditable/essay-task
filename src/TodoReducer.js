export default function TodoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo = {
        id: state.maxId + 1,
        value: action.value,
      };
      return {
        maxId: state.maxId + 1,
        todoList: [...state.todoList, newTodo],
      };
    }
    case "REMOVE_TODO": {
      const index = state.todoList.findIndex((t) => t.id === action.id);
      const newTodoList = [...state.todoList];
      newTodoList.splice(index, 1);
      return {
        maxId: state.maxId,
        todoList: newTodoList,
      };
    }
    default:
      return state;
  }
}
