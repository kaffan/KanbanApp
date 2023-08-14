import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
const SetTaskView = createSlice({
    name:"TaskVisibility",
    initialState:initialState,
    reducers:{
        toggleVisibility(state,action){
            action.payload.visible = !action.payload.visible;
            return state;
        }
    }
});

export const { toggleVisibility } = SetTaskView.actions;

export default SetTaskView.reducer;