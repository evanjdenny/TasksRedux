import { useState } from "react";
import { addTask } from "./tasksSlice";
import { useDispatch } from "react-redux";

export default function AddTask() {
  const [task, setTask] = useState("");
  const [details, setDetails] = useState("");
  const dispatch = useDispatch();

  function handleTaskChange(event) {
    setTask(event.target.value);
  }

  function handleDetailsChange(event) {
    setDetails(event.target.value);
  }

  return (
    <div className="row g-3 m-2 mb-5">
      <div className="form-floating col-4">
        <input
          onChange={handleTaskChange}
          className="form-control"
          id="task"
          type="text"
          value={task}
        />
        <label htmlFor="details" className="form-floating">
          Task
        </label>
      </div>
      <div className="form-floating col-6">
        <input
          onChange={handleDetailsChange}
          className="form-control"
          id="details"
          type="text"
          value={details}
        />
        <label htmlFor="details" className="form-floating">
          Details
        </label>
      </div>
      <div className="col-2">
        <button
          className="p-3 btn btn-primary"
          onClick={() => {
            dispatch(addTask({ task: task, taskDetails: details }));
            setTask("");
            setDetails("");
          }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
