import { createSlice } from "@reduxjs/toolkit";
import { Fragment } from "react";

const initialState = "none";
const AddNewTask = createSlice({
    name:"AddNewTask",
    initialState:initialState,
    reducers:{
        toggleDisplay(state, action){
            state = (action.payload==="none") ? "block" : "none";  
            return state;
        }
    }
});

export const { toggleDisplay } = AddNewTask.actions;

export default AddNewTask.reducer;