import "./bootstrap.css";
import Task from "./features/tasks/Task";
import TaskList from "./features/tasks/TaskList";
import AddTask from "./features/tasks/AddTask";

export default function App() {
  return (
    <div className="App">
      <Task />
      <TaskList />
      <AddTask />
    </div>
  );
}
