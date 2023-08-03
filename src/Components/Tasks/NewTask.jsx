import { Button, Grid } from "@mui/material";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDisplay } from "../../Reducers/AddNewTask";

const NewTask = () => {
    const Dispatch = useDispatch();
    const CurrentBoard = useSelector((state)=>state.Boards.find((ele)=>ele.clicked));
    const state = useSelector((state)=>state)
    console.log(CurrentBoard);
    const [ taskObj, SetTaskObj ] = useState({});
    const [ display, SetDisplay ] = useState("none");
    const taskHandler = () =>{

    }
    const clickHandler = () =>{
        Dispatch(toggleDisplay());
    }
    return (
        <Fragment>
            <Grid container direction="column"
                sx={{
                    position:"absolute",
                    display:display,
                    backgroundColor:"lightgrey",
                    top:"35%",
                    left:"36%",
                    zIndex:"4",
                    width:"34%",
                    padding:"20px"
                }}>
                    <Grid item sx={{
                        padding:"5px",
                        fontWeight:"700"
                    }}>
                        <label>Sub Task Title</label>
                    </Grid>
                    <Grid item sx={{
                        padding:"5px"
                    }}>
                        <input type="text" style={{
                            width:"80%",
                            padding:"4px 4px",
                            borderRadius:"7px",
                            border:"solid 0.5px pink"
                        }}></input>
                    </Grid>
                    <Grid item sx={{
                        padding:"5px"
                    }}>
                        <Button sx={{margin:"0 3px"}} variant="contained">Add Subtask</Button>
                        <Button sx={{margin:"0 3px"}} color="warning" variant="outlined">Close</Button>
                    </Grid>
                </Grid>
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                zIndex: "3",
                backgroundColor: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(1px)",
                overflowY:"scroll",
                display:"block"
            }} onClick={clickHandler}>
                <Grid container direction="column" onClick={(e)=>e.stopPropagation()} spacing={1} sx={{
                    position: "absolute",
                    left: "35%",
                    zIndex: "1",
                    margin: "15px",
                    padding: "15px",
                    width: "35%",
                    height: "fit-content",
                    backdropFilter: "blur(5px)",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    textAlign: "left",
                }}>
                    <Grid item sx={{
                        fontWeight: "700"
                    }}>
                        <span>Add New Task</span>
                    </Grid>
                    <Grid item>
                        <label style={{
                            padding: "5px 0",
                            margin: "5px 0",
                            color: "lightgray",
                            fontWeight: "700"
                        }}>Title</label><br />
                        <input type="text" placeholder="e.g. Take coffee break" style={{
                            padding: "10px",
                            margin: "10px 0",
                            width: "90%",
                            border: "solid 0.6px",
                            borderColor: "lightgrey",
                            borderRadius: "7px"
                        }}></input>
                    </Grid>
                    <Grid item>
                        <label style={{
                            padding: "5px 0",
                            margin: "5px 0",
                            color: "lightgray",
                            fontWeight: "700"
                        }}>Description</label><br />
                        <textarea cols="80" rows="1" placeholder="e.g. it's always good to take a break. This 15 mins break will recharge the batteries a little.... " style={{
                            padding: "10px",
                            margin: "10px 0",
                            width: "90%",
                            height: "60px",
                            border: "solid 0.6px",
                            borderColor: "lightgrey",
                            borderRadius: "7px"
                        }}></textarea>
                    </Grid>
                    <Grid item sx={{
                        height:"fit-content"
                    }}>
                        <label style={{
                            padding: "5px 0",
                            margin: "5px 0",
                            color: "lightgray",
                            fontWeight: "700"
                        }}>Subtasks</label>
                        <Grid container direction="column" sx={{
                            flexWrap:"nowrap",
                            overflowY:"scroll",
                            height:"20vh"
                        }}>
                            <Grid item>
                                <Grid sx={{
                                    margin: "5px 0",
                                    width: "100%",
                                }} direction="row" container>
                                    <Grid sx={{
                                        width: "90%",
                                        border: "1px solid lightgrey",
                                        padding: "5px",
                                        borderRadius: "10px"
                                    }} item>Element</Grid>
                                    <Grid sx={{
                                        padding: "5px",
                                        cursor: "pointer"
                                    }} item>X</Grid>
                                </Grid>
                            </Grid>
                        </Grid>                         
                        <Button sx={{
                            width: "95%",
                            fontWeight: "600",
                            textTransform: "capitalize",
                            backgroundColor: "#FCE9F1",
                            borderRadius: "50px",
                            marginTop:"15px"
                        }}>+ Add New Subtask</Button>
                    </Grid>
                    <Grid item>
                        <label style={{
                            padding: "5px 0",
                            margin: "5px 0",
                            color: "lightgray",
                            fontWeight: "700"
                        }}>Status</label><br />
                        <select name="status" id=""  style={{
                            padding: "10px",
                            margin: "10px 0",
                            width: "95%",
                            border: "solid 0.6px",
                            borderColor: "lightgrey",
                            borderRadius: "7px"
                        }}>
                            {CurrentBoard.columns.map((ele)=>(
                                <option value={ele.columnName}>{ele.columnName}</option>
                            ))}
                        </select>
                    </Grid>
                    <Grid item>
                        <Button onClick={taskHandler} sx={{
                            width: "95%",
                            fontWeight: "600",
                            textTransform: "capitalize",
                            backgroundColor: "#4942E4",
                            borderRadius: "50px",
                            color: "white",
                            ":hover": {
                                color: "#1976d2"
                            }
                        }}>Create New Task</Button>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
}

export default NewTask;