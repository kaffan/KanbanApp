import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
enableMapSet();
const Columns = createSlice({
    name:"Columns",
    initialState : new Set(),
    reducers : {
        AddColumn(state,action){
            // console.log(state+" "+action.payload);
            let arr = [];
            for (let value of state){
                if(value)
                arr.push([...value]);
            }
            state = new Map([...arr, ...action.payload]);
            return state;
        }
    }
});

export const { AddColumn } = Columns.actions;

export default Columns.reducer;