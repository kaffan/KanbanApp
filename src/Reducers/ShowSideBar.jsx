import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

 export const ShowSideBar = createSlice({
    name :"ShowSideBar",
    initialState:initialState,
    reducers:{
        ChangeState:(state) => {
            state = !state;
            return state;
        }
    }
 });

export const { ChangeState } = ShowSideBar.actions;

export default ShowSideBar.reducer;