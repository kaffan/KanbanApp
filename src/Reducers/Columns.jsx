import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
enableMapSet();
const Columns = createSlice({
    name:"Columns",
    initialState : new Set(),
    reducers : {
        AddColumn(state,action){
            // console.log(state+" "+action.payload);
            let arr = Array.from(state);
            arr = arr.filter((ele)=>{if(Object.keys(ele).length){return ele}})
            state = new Set([...state, ...action.payload]);
            return state;
        }
    }
});

export const { AddColumn } = Columns.actions;

export default Columns.reducer;