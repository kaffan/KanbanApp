import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
enableMapSet();
const Columns = createSlice({
    name:"Columns",
    initialState : new Set(),
    reducers : {
        AddColumn(state,action){
            state = new Set(...state, ...action.payload);
        }
    }
});

export const { AddColumn } = Columns.actions;

export default Columns.reducer;