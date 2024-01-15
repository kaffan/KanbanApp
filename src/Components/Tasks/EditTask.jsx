import { Button, Grid } from "@mui/material";
import { Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { toggleDisplay } from "../../Reducers/AddNewTask";
import { UpdateBoard } from "../../Reducers/Boards";

const EditTask = ({ Task, col }) => {
    const Dispatch = useDispatch();
    // const CurrentBoard = {...useSelector((state)=>state.Boards.find((ele)=>ele.clicked))}; we need to create deep copy of currentboard
    const CurrentBoard = JSON.parse(JSON.stringify(useSelector((state) => state.Boards.find((ele) => ele.clicked))));
    const state = useSelector((state) => state)
    console.log(CurrentBoard);
    console.log(Task);
    const [taskObj, SetTaskObj] = useState({...JSON.parse(JSON.stringify(Task))});
    const [display, SetDisplay] = useState("none");
    const [subTasks, SetSubTasks] = useState([...JSON.parse(JSON.stringify(Task.subtasks))]);
    const ref1 = useRef();
    let [ ref2, SetRef2 ] = useState(taskObj.name);
    let [ ref3, SetRef3 ] = useState(taskObj.description);
    const ref4 = useRef();
    console.log(subTasks)
    const taskHandler = () => {
        const NewTask = {
            name: ref2.current.value,
            description: ref3.current.value,
            subtasks: [...subTasks],
        };
        const columnName = ref4.current.value;
        CurrentBoard.columns.map((ele) => {
            if (ele.columnName === columnName) {
                ele.columnTasks = [...ele.columnTasks, NewTask]
            }
        });
        Dispatch(UpdateBoard(CurrentBoard));
        clickHandler();
    }
    const subtaskHanlder = () => {
        const newTask = {val : ref1.current.value, checked : false};
        SetSubTasks((prevState) => [...prevState, newTask]);
        ref1.current.value = "";
        closeSubTask();
    }
    const closeSubTask = () => {
        SetDisplay("none");
    }
    const clickHandler = () => {
        let node = document.getElementById("portal4");
        node.removeChild(node.firstChild);
        // Dispatch(toggleDisplay());
        // props.setTask(false);
        // props.editTask(false);
    }
    return (
        <Fragment>
            <Grid container direction="column"
                sx={{
                    position: "absolute",
                    display: display,
                    backgroundColor: "lightgrey",
                    top: "35%",
                    left: "36%",
                    zIndex: "4",
                    width: "34%",
                    padding: "20px"
                }}>
                <Grid item sx={{
                    padding: "5px",
                    fontWeight: "700"
                }}>
                    <label>Sub Task Title</label>
                </Grid>
                <Grid item sx={{
                    padding: "5px"
                }}>
                    <input ref={ref1} type="text" style={{
                        width: "80%",
                        padding: "4px 4px",
                        borderRadius: "7px",
                        border: "solid 0.5px pink"
                    }}></input>
                </Grid>
                <Grid item sx={{
                    padding: "5px"
                }}>
                    <Button sx={{ margin: "0 3px" }} variant="contained" onClick={subtaskHanlder}>Add Subtask</Button>
                    <Button sx={{ margin: "0 3px" }} color="warning" onClick={closeSubTask} variant="outlined">Close</Button>
                </Grid>
            </Grid>
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                zIndex: "3",
                backgroundColor: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(1px)",
                overflowY: "scroll",
                display: "block"
            }} onClick={clickHandler}>
                <Grid container direction="column" onClick={(e) => e.stopPropagation()} spacing={1} sx={{
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
                        <span>Edit Task</span>
                    </Grid>
                    <Grid item>
                        <label style={{
                            padding: "5px 0",
                            margin: "5px 0",
                            color: "lightgray",
                            fontWeight: "700"
                        }}>Title</label><br />
                        <input value={ref2} onChange={(e)=>SetRef2(e.target.value)} type="text" placeholder="e.g. Take coffee break" style={{
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
                        <textarea value={ref3} onChange={(e)=>SetRef3(e.target.value)} cols="80" rows="1" placeholder="e.g. it's always good to take a break. This 15 mins break will recharge the batteries a little.... " style={{
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
                        height: "fit-content"
                    }}>
                        <label style={{
                            padding: "5px 0",
                            margin: "5px 0",
                            color: "lightgray",
                            fontWeight: "700"
                        }}>Subtasks</label>
                        <Grid container direction="column" sx={{
                            flexWrap: "nowrap",
                            overflowY: "scroll",
                            height: "20vh"
                        }}>
                            {subTasks.length != 0 && subTasks.map((ele) => (
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
                                        }} item>{ele.val}</Grid>
                                        <Grid sx={{
                                            padding: "5px",
                                            cursor: "pointer"
                                        }} item>X</Grid>
                                    </Grid>
                                </Grid>
                            ))}
                            {/* <Grid item>
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
                            </Grid> */}
                        </Grid>
                        <Button sx={{
                            width: "95%",
                            fontWeight: "600",
                            textTransform: "capitalize",
                            backgroundColor: "#FCE9F1",
                            borderRadius: "50px",
                            marginTop: "15px"
                        }} onClick={() => SetDisplay("block")}>+ Add New Subtask</Button>
                    </Grid>
                    <Grid item>
                        <label style={{
                            padding: "5px 0",
                            margin: "5px 0",
                            color: "lightgray",
                            fontWeight: "700"
                        }}>Status</label><br />
                        <select ref={ref4} name="status" id="" style={{
                            padding: "10px",
                            margin: "10px 0",
                            width: "95%",
                            border: "solid 0.6px",
                            borderColor: "lightgrey",
                            borderRadius: "7px"
                        }}>
                            {CurrentBoard.columns.map((ele) => (
                                <option value={ele.name}>{ele.name}</option>
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
                        }}>Edit Task</Button>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default EditTask;