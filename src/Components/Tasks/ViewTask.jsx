import { Grid } from "@mui/material";
import { Fragment } from "react";

const ViewTask = ({col, Task, CurrentBoard}) =>{
    const AllColumns = CurrentBoard.columns.filter((col)=>col.columnName);
    console.log(Task);
    return(
        <Fragment>
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                zIndex: "3",
                backgroundColor: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(1px)",
                overflowY:"scroll",
                display:"block"
            }}>
            <Grid container direction="column" onClick={(e)=>e.stopPropagation()} sx={{
                position: "absolute",
                left: "35%",
                zIndex: "1",
                margin: "15px",
                padding: "25px",
                width: "35%",
                height: "fit-content",
                backdropFilter: "blur(5px)",
                backgroundColor: "rgba(255, 255, 255, 1)",
                textAlign: "left",
            }}>
                <Grid item sx={{
                    fontWeight: "700"
                }}>
                    <Grid container sx={{

                    }}>
                        <Grid item sx={{
                            width:"80%"
                        }}>
                            {Task.name}
                        </Grid>
                        <Grid item>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    {Task.decription}
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <label>Subtasks</label>
                        </Grid>
                        {Task.subtasks.length!==0 && Task.subtasks.map((ele,i)=>(
                            <Grid item>
                                <span><input type="checkbox" id={i} /></span>
                                <label>{ele}</label>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item>
                    <select>
                    {AllColumns.length!==0 && AllColumns.map((Ele)=>(
                        <option selected={(Ele.columnName===col.columnName) ? 'selected' : ""} value={Ele.columnName}>{Ele.columnName}</option>
                    ))}
                    </select>
                </Grid>
            </Grid>
            </div>
        </Fragment>
    );
}

export default ViewTask;