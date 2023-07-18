import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const NewBoard = createSlice({
    name:"NewBoard",
    initialState:initialState,
    reducers:{
        AddANewBoard(state,action){
            state = [...state, action.payload];
            return state;
        },
        DeleteABoard(state,action){
            state = state.filter((ele)=>ele.name!=action.payload);
            return state;
        }
    }
});

export const { AddANewBoard, DeleteABoard } = NewBoard.actions;

export default NewBoard.reducer;