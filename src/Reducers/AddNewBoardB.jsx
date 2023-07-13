import { createSlice } from "@reduxjs/toolkit";

const initialState = 'none'
const AddNewBoardB = createSlice({
    name:'AddNewBoard',
    initialState,
    reducers:{
        toggleDisplay(state, action){
           state = (action.payload==='none') ? 'block' : 'none';
           return state;
        }
    }
});

export const { toggleDisplay } = AddNewBoardB.actions;

export default AddNewBoardB.reducer;