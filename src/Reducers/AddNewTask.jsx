import { createSlice } from "@reduxjs/toolkit";
import { Fragment } from "react";

const initialState = false;
const AddNewTask = createSlice({
    name:"AddNewTask",
    initialState:initialState,
    reducers:{
        toggleDisplay(state, action){
            state = !state;  
            return state;
        }
    }
});

export const { toggleDisplay } = AddNewTask.actions;

export default AddNewTask.reducer;