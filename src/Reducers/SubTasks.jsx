import { createSlice } from "@reduxjs/toolkit";
hh
const SubTasks = createSlice({
    name : "Subtasks",
    initialState : [],
    reducers : {
        AddSubtask(state, action){
            state = [...state, action,payload];
            return state;
        }
    }
});

export const { AddSubtask } = SubTasks.actions;
export default SubTasks.reducer;