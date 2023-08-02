import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
const AddNewBoardB = createSlice({
    name:'AddNewBoard',
    initialState,
    reducers:{
        toggleDisplay(state){
           state = !state;
           return state;
        }
    }
});

export const { toggleDisplay } = AddNewBoardB.actions;

export default AddNewBoardB.reducer;