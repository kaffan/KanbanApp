import { Grid } from "@mui/material";
import { Fragment, useState } from "react";
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
    const taskState = useSelector((state)=>state.TaskView);
    return(
        <Fragment>
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
                {(col.Tasks) && col.Tasks.map((ele,i)=>(
                <Grid key={i} item onClick={()=>Dispatch(toggleVisibility(ele))} sx={{
                    padding:"15px 10px",
                    backgroundColor:"white",
                    width:"100%",
                    boxShadow:"2px 2px 5px lightgrey",
                    borderRadius:"7px",
                    fontSize:"17px",
                    fontWeight:"700",
                    margin:"10px 0"
                }}> 
                  {taskState && createPortal(<ViewTask CurrentBoard={CurrentBoard} Task={ele} col={col}></ViewTask>, document.getElementById("portal4"))}
                  {/* {editTask && createPortal(<EditTask setTask={SetTaskToggle} editTask={SetEditTask} CurrentBoard={CurrentBoard} Task={ele} col={col}></EditTask>, document.getElementById("portal5"))}; */}
                  {ele.name}
                </Grid>))}
            </Grid>
        </Fragment>
    );
}

export default Column;