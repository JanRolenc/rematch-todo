import "./App.css";
import Addtodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="app">
      <Addtodo />
      <Todo />
    </div>
  );
}

export default App;
