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
                width: "30%",
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
                        margin: "5px 0",
                        color: "#000000",
                        fontWeight: "700"
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
                                color:"mediumgrey",
                                fontWeight:"700"
                            }}>Subtasks</label>
                        </Grid>
                        {Task.subtasks.length!==0 && Task.subtasks.map((ele,i)=>(
                            <Grid  item sx={{
                            padding: "7px 5px",
                            margin: "5px 0",
                            width:"100%",
                            backgroundColor:"#f4f7fd",
                            fontSize:"16px",
                            color: "rgb(130, 143, 163)",
                            fontWeight:"600"
                            }}>
                                <input style={{padding:"5px"}} type="checkbox" id={i} />
                                <label style={{padding:"5px"}}>{ele}</label>
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