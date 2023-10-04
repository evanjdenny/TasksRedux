import { completeTask, undoCompleteTask, removeTask } from "./tasksSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Task({ task, details, completed }) {
  const current = useSelector((state) => state.tasks.currentTask.id);
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  if (tasks.length === 0) {
    return <h1 className="display-1">No tasks found...</h1>;
  } else {
    return (
      <div
        className={
          tasks[current].completed
            ? "card m-2 bg-success"
            : "card m-2 bg-danger"
        }
      >
        <div className="card-body">
          <div className="w-100 d-inline-flex justify-content-between">
            <h4 className="card-title">{tasks[current].task}</h4>
            <button
              onClick={() => dispatch(removeTask(current))}
              className="btn-close"
            ></button>
          </div>
          <p className="card-text">{tasks[current].details}</p>
          {tasks[current].completed ? (
            <button
              onClick={() => dispatch(undoCompleteTask(current))}
              className="btn btn-danger"
            >
              Undo
            </button>
          ) : (
            <button
              onClick={() => dispatch(completeTask(current))}
              className="btn btn-success"
            >
              Complete
            </button>
          )}
        </div>
      </div>
    );
  }
}

export function TaskListItem({ task, completed, selected, onClick }) {
  return (
    <li
      onClick={onClick}
      className={
        selected
          ? "bg-warning list-group-item d-inline-flex justify-content-between"
          : "list-group-item d-inline-flex justify-content-between"
      }
    >
      {task}
      {completed ? (
        <i className="bi-check-circle-fill"></i>
      ) : (
        <i className="bi-x-lg"></i>
      )}
    </li>
  );
}
