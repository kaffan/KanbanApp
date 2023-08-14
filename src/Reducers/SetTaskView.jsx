import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
const SetTaskView = createSlice({
    name:"TaskVisibility",
    initialState:initialState,
    reducers:{
        toggleVisibility(state,action){
            action.payload = !action.payload;
        }
    }
});

export const { toggleVisibility } = SetTaskView.actions;

export default SetTaskView.reducer;