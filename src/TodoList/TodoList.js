import { useReducer, useRef } from "react";
import TodoReducer from "../TodoReducer";

const initialState = {
  maxId: 0,
  todoList: [],
};

export default function TodoList() {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const inputRef = useRef();

  return (
    <div>
      <ul>
        {todos.todoList.map((item) => (
          <li key={item.id}>
            <span>{item.value}</span>

            <button
              onClick={() => dispatch({ type: "REMOVE_TODO", id: item.id })}
            >
              Remove todo
            </button>
          </li>
        ))}
      </ul>

      <input ref={inputRef} />

      <button
        onClick={() =>
          dispatch({ type: "ADD_TODO", value: inputRef.current.value })
        }
      >
        Add todo
      </button>
    </div>
  );
}
