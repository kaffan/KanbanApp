import { createSlice } from "@reduxjs/toolkit";

const initialState = "none"
const EditBoard = createSlice({
    name:"EditBoard",
    initialState:initialState,
    reducers:{
        toggleDisplay(state,action){
            state = action.payload;
            return state;
        }
    }
});

export const { toggleDisplay } = EditBoard.actions;

export default EditBoard.reducer;