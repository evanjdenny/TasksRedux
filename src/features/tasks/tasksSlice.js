import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  placeholder: {
    id: -1
  },
  currentTask: {
    id: 0
  },
  tasks: [
    {
      id: 0,
      task: "Give Carlos his money back",
      details: "Why do I owe this mf $8,000?",
      completed: false
    },
    {
      id: 1,
      task: "Murder Carlos :)",
      details: "Hide murder weapon in garbage disposal.",
      completed: false
    },
    {
      id: 2,
      task: "Eat some good food",
      details: "Some pancakes would be great...",
      completed: false
    }
  ]
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.currentTask.id = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.push({
        id: state.tasks.length,
        task: action.payload.task,
        details: action.payload.taskDetails,
        completed: false
      });
    },
    removeTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
      state.currentTask.id = 0;
    },
    completeTask: (state, action) => {
      if (!state.tasks[action.payload].completed)
        state.tasks[action.payload].completed = true;
    },
    undoCompleteTask: (state, action) => {
      if (state.tasks[action.payload].completed)
        state.tasks[action.payload].completed = false;
    }
  }
});

export const {
  addTask,
  removeTask,
  completeTask,
  undoCompleteTask,
  setCurrent
} = tasksSlice.actions;
export default tasksSlice.reducer;
