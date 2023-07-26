import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
const EditBoard = createSlice({
    name:"EditBoard",
    initialState:initialState,
    reducers:{
        toggleDisplay(state){
            return !state;
        }
    }
});

export const { toggleDisplay } = EditBoard.actions;

export default EditBoard.reducer;