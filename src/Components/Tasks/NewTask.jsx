import { Button, Grid } from "@mui/material";
import { Fragment } from "react";

const NewTask = () =>{
    return(
        <Fragment>
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                zIndex:"3",
                backgroundColor:"rgba(0,0,0,0.6)",
                backdropFilter:"blur(1px)",
            }}>
                <Grid container direction="column" spacing={1} sx={{
                    position: "absolute",
                    left: "35%",
                    top: "7%",
                    zIndex: "1",
                    margin: "15px",
                    padding: "15px",
                    width: "35%",
                    height:"fit-content",
                    backdropFilter: "blur(5px)",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    textAlign: "left",
                }}>
                    <Grid item sx={{
                        fontWeight:"700"
                    }}>
                        <span>Add New Task</span>
                    </Grid>
                    <Grid item>
                        <label style={{
                            padding:"5px 0",
                            margin:"5px 0",
                            color:"lightgray",
                            fontWeight:"700"
                        }}>Title</label><br />
                        <input type="text" placeholder="e.g. Take coffee break" style={{
                             padding:"10px",
                             margin:"10px 0",
                             width:"90%",
                             border:"solid 0.6px",
                             borderColor:"lightgrey",
                             borderRadius:"7px"
                        }}></input>
                    </Grid>
                    <Grid item>
                        <label style={{
                            padding:"5px 0",
                            margin:"5px 0",
                            color:"lightgray",
                            fontWeight:"700"
                        }}>Description</label><br />
                        <textarea cols="80" rows="3" placeholder="e.g. it's always good to take a break. This 15 mins break will recharge the batteries a little.... " style={{
                            padding:"10px",
                             margin:"10px 0",
                             width:"90%",
                             height:"100px",
                             border:"solid 0.6px",
                             borderColor:"lightgrey",
                             borderRadius:"7px"
                        }}></textarea>
                    </Grid>
                    <Grid item>
                        <label sx={{
                            padding:"3px 0",
                            margin:"3px 0",
                            color:"lightgray",
                            fontWeight:"700"
                        }}>Subtasks</label>
                        <Grid container>

                        </Grid>
                        <Button>+ Add New Subtask</Button>
                    </Grid>
                    <Grid item>
                        <label>Status</label><br />
                        <select name="status" id="" disabled="disabled">
                            <option value="Todo">To Do</option>
                        </select>
                    </Grid>
                    <Grid item>
                        <Button>Create New Task</Button>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
}

export default NewTask;