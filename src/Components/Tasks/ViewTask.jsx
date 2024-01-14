import { Grid } from "@mui/material";
import { Fragment, useEffect, useMemo, useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from "react-redux";
import { UpdateBoard } from "../../Reducers/Boards";
import { createPortal } from "react-dom";
import EditTask from "./EditTask";

function BasicMenu({ EditTask }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const editTaskHandler = () =>{
        EditTask();
        handleClose();
        // setTask(false);
        // editTask(true);
    }
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <img src="assets/icon-vertical-ellipsis.svg"></img>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={editTaskHandler}>Edit Task</MenuItem>
          <MenuItem sx={{color:"red"}} onClick={handleClose}>Delete Task</MenuItem>
        </Menu>
      </div>
    );
  }
const ViewTask = ({col, Task, CurrentBoard, SetTaskState}) =>{
    console.log(col);
    // const [ displayState, SetDisplayState ] = useState(()=>(state) ? "block" : "none");
    let Dispatch = useDispatch();
    let newTask, newCol, payload;
    let [ toggle, SetToggle ] = useState(false);
    let [ status, SetStatus ] = useState(1);
    const AllColumns = CurrentBoard.columns.filter((column)=>column.name);
    let subTasks = [...JSON.parse(JSON.stringify([...Task.subtasks]))];
    let updateBoard = () =>{
        newTask = {...Task, subtasks : subTasks};
        newCol = { ...col , Tasks : col.Tasks.map((Task) => {
            if(Task.name===newTask.name) {return newTask}
            else{
                return Task;
            }
        }) };
         payload = { ...CurrentBoard , columns : CurrentBoard.columns.map((col) => {
            if(col.name===newCol.name){return newCol}
            else{
                return col;
            }
        }) };
        Dispatch(UpdateBoard(payload));
    }
    let clickHandler = ()=>{
        updateBoard();
        SetTaskState("");     
    }
    let changeStatus = (e,arr,i) =>{
        arr[i].checked = !arr[i].checked;
        console.log(e);
        e.target.setAttribute("checked",arr[i].checked);
        console.log(e.target);
        // e.target.setAttribute("checked",arr[i].checked);
        e.target.nextSibling.style.textDecoration = (arr[i].checked) ? "line-through":"none";
        // SetStatus((state) => !state)
    }
    let editTask = () =>{
        console.log(1);
        updateBoard();
        SetToggle((prevState)=>!prevState);
        console.log(toggle);
    }
    console.log(Task);
    return(
        <Fragment>
            {document.getElementById("portal4").innerHTML = ""}
            {toggle && createPortal(<EditTask col={newCol} Task={newTask} CurrentBoard={CurrentBoard}></EditTask> , document.getElementById("portal4"))}
            <div style={{
                position: "fixed",
                width: "100%",
                height: "100vh",
                zIndex: "3",
                backgroundColor: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(1px)",
                overflowY:"scroll",
                display:"block",
            }}
            onClick={clickHandler}
            >
            <Grid container direction="column" onClick={(e)=>e.stopPropagation()} sx={{
                position: "absolute",
                left: "33%",
                zIndex: "1",
                top:"24%",
                margin: "15px",
                padding: "25px",
                width: "33%",
                height: "fit-content",
                backdropFilter: "blur(5px)",
                backgroundColor: "rgba(255, 255, 255, 1)",
                textAlign: "left",
            }}>
                <Grid item sx={{
                    fontWeight: "700"
                }}>
                    <Grid container sx={{
                        padding: "5px 0",
                        // margin: "5px 0",
                        color: "#000000",
                        fontWeight: "700",
                        width:"100%",
                        alignItems:"center"
                    }}>
                        <Grid item sx={{
                            width:"calc(100% - 64px)",
                            wordWrap:"break-word",
                            fontSize:"20px",
                            lineHeight:"15px"
                        }}>
                            {Task.name}
                        </Grid>
                        <Grid item>
                            <BasicMenu EditTask={editTask} ></BasicMenu>                          
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={{
                     padding: "5px 0",
                     margin: "5px 0",
                     color:"rgb(130, 143, 163)",
                     width:"100%",
                     height:"auto",
                     fontSize:"16px"
                }}>
                    <div style={{width:"100%",height:"auto",wordBreak: "break-word",lineHeight:"21px"}}>
                    {Task.description}
                    </div>
                </Grid>
                <Grid item>
                    <Grid direction="column" container>
                        <Grid item sx={{
                            padding: "5px 0",
                            margin: "5px 0",
                        }}>
                            <label style={{
                                color:"rgb(130, 143, 163)",
                                fontWeight:"700"
                            }}>Subtasks</label>
                        </Grid>
                        {subTasks.length!==0 && subTasks.map((ele,i,arr)=>(
                            <Grid key={i} item sx={{
                            padding: "7px 5px",
                            margin: "5px 0",
                            width:"100%",
                            backgroundColor:"#f4f7fd",
                            fontSize:"16px",
                            color: "rgb(130, 143, 163)",
                            fontWeight:"600"
                            }}>
                                {console.log(arr)}
                                <input style={{padding:"5px"}} type="checkbox" id={i} onChange={(e)=>changeStatus(e,arr,i)} checked={(ele.checked) ? true : false} />
                                <label style={{padding:"5px", textDecoration:(ele.checked) ? "line-through" : "none"}}>{ele.val}</label>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item sx={{
                    padding: "5px 0",
                    margin: "5px 0",
                }}>
                    <label style={{
                        color:"rgb(130, 143, 163)",
                        fontSize:"16px",
                        lineHeight: "20px",
                        fontWeight:"500",
                        margin:"7px 0"
                    }}>Current Status</label><br />
                    <select style={{width:"100%", border:"solid 2px lightgrey", padding:"7px 5px", borderRadius:"7px"}}>
                    {AllColumns.length!==0 && AllColumns.map((Ele)=>(
                        <option disabled selected={(Ele.name===col.name) ? 'selected' : ""} value={Ele.name}>{Ele.name}</option>
                    ))}
                    </select>
                </Grid>
            </Grid>
            </div>
        </Fragment>
    );
}

export default ViewTask;