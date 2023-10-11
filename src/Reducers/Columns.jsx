import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
enableMapSet();
const Columns = createSlice({
    name:"Columns",
    initialState : [],
    reducers : {
        AddColumn(state,action){
            // console.log(state+" "+action.payload);
            let arr = [];
            state.forEach((val,key)=>{
                arr.push([key,val]);
            })
            state = [...arr, ...action.payload];
            return state;
        }
    }
});

export const { AddColumn } = Columns.actions;

export default Columns.reducer;