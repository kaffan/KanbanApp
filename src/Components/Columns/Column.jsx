import { Grid } from "@mui/material";
import { Fragment, useEffect, useRef, useState } from "react";
import ViewTask from "../Tasks/ViewTask";
import { createPortal } from "react-dom";
import EditTask from "../Tasks/EditTask";
import { toggleVisibility } from "../../Reducers/SetTaskView";
import { useDispatch, useSelector } from "react-redux";

const Column = ({col,CurrentBoard}) =>{
    console.log(col);
    const [ taskToggle, SetTaskToggle ] = useState(false);
    const [ editTask, SetEditTask ] = useState(false);
    const Dispatch = useDispatch();
    const [ taskState, SetTaskState ] = useState("");
    let ref = useRef([]);
    // ref.current = [];
    useEffect(()=>{
        ref.current.map((ele)=>{
            ele.addEventListener("click",(e)=>{
                console.log(e);
                console.log(1);
                SetTaskState(e.target.id);
            },{ once : true})
        })
    });
    let addToRefs = (ele) =>{
        console.log(ele);
        if(ele && !ref.current.includes(ele)){
            ref.current.push(ele);
        }
    }
    return(
        <Fragment>
            {console.log(col)}
            <Grid container direction="column"
            sx={{
                textAlign:"left",
                height:"100%",
                overflowY:"scroll",
                overflowX:"hidden",
                flexWrap:"nowrap",
                cursor:"pointer",
                '&::-webkit-scrollbar': {
                    width: '0'
                  },
            }}>
                <Grid item 
                sx={{
                    margin:"15px 0"
                }}>
                    {col.name}
                </Grid>
                {/* When we attach a event handler with onclick or onmousedown event the function is 
                going to execute every time this component is re rendered. so when a click event occurs 
                for 2nd time the event handler will execute twice */}
                {(col.Tasks) && col.Tasks.map((ele,i)=>(
                <Grid ref={addToRefs} key={i} id={i} item sx={{
                    padding:"15px 10px",
                    backgroundColor:"white",
                    width:"100%",
                    boxShadow: "0 4px 6px rgba(54,78,126,.102)",
                    borderRadius:"7px",
                    fontSize:"17px",
                    fontWeight:"700",
                    margin:"10px 0"
                }}> 
                  {console.log(taskState,i)}
                  {taskState==i && createPortal(<ViewTask CurrentBoard={CurrentBoard} Task={ele} col={col} SetTaskState={SetTaskState}></ViewTask>, document.getElementById("portal4"))}
                  {/* {editTask && createPortal(<EditTask setTask={SetTaskToggle} editTask={SetEditTask} CurrentBoard={CurrentBoard} Task={ele} col={col}></EditTask>, document.getElementById("portal5"))}; */}
                  {ele.name}
                </Grid>))}
            </Grid>
        </Fragment>
    );
}

export default Column;