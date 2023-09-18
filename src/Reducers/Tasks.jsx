import { createSlice } from "@reduxjs/toolkit";

const Tasks = createSlice({
    name : "Tasks",
    initialState : [],
    reducers : {
        AddTask(state,action){
            state = [...state, action.payload];
        }
    }
});

export const { AddTask } = Tasks.actions;

export default Tasks.reducer;
