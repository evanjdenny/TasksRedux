import { TaskListItem } from "./Task";
import { useSelector, useDispatch } from "react-redux";
import { setCurrent } from "./tasksSlice";

export default function TaskList({ select }) {
  const current = useSelector((state) => state.tasks.currentTask.id);
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const complete = [];
  const incomplete = [];
  function returnTLI(index, task, completed) {
    if (index === current)
      return (
        <TaskListItem
          task={task}
          completed={completed}
          selected={true}
          onClick={() => {
            dispatch(setCurrent(index));
          }}
        />
      );
    else
      return (
        <TaskListItem
          task={task}
          completed={completed}
          selected={false}
          onClick={() => {
            dispatch(setCurrent(index));
          }}
        />
      );
  }
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed)
      complete.push(returnTLI(i, tasks[i].task, tasks[i].completed));
    else if (!tasks[i].completed)
      incomplete.push(returnTLI(i, tasks[i].task, tasks[i].completed));
  }
  return (
    <div className="bg-primary">
      <h5 className="display-6 text-white p-2">Incomplete</h5>
      <ul className="list-group m-2 p-1">{incomplete}</ul>
      {complete.length !== 0 && (
        <h5 className="display-6 text-white p-2">Complete</h5>
      )}
      <ul className="list-group m-2 p-1 pb-3">{complete}</ul>
    </div>
  );
}
