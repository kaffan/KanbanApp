import { createSlice } from "@reduxjs/toolkit";

const Columns = createSlice({
    name:"Columns",
    initialState : [],
    reducers : {
        AddColumn(state,action){
            state = [...state, action.payload2]
        }
    }
});

export const { AddColumn } = Columns.actions;

export default Columns.reducer;