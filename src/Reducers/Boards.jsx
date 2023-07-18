import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const Boards = createSlice({
    name:"Boards",
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

export const { AddANewBoard, DeleteABoard } = Boards.actions;

export default Boards.reducer;