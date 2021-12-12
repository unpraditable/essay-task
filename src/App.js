import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList/TodoList";
import MyComponent from "./Counter/MyComponent";

const arr = [1, 2, 3, 4];
function App() {
  return (
    <div className="App">
      <TodoList />
      <MyComponent headerText="ini header" children={[1, 2, 3, 4]} />
    </div>
  );
}

export default App;
