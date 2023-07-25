import { Button, Grid } from "@mui/material";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDisplay } from "../../Reducers/EditBoard";

const EditBoard = () =>{
    const displayState = useSelector((state)=>state.EditBoard);
    const Dispatch = useDispatch();
    const state = useSelector((state)=>state);
    console.log(state);
    const CurrentBoard = useSelector((state)=>state.CurrentBoard);
    console.log(CurrentBoard);
    const BoardName = (CurrentBoard!=={}) ? CurrentBoard.name : "";
    const [ columns, SetColumns ] = useState(()=>(CurrentBoard!=={}) ? CurrentBoard.columns : []);
    console.log(BoardName)
    return(
        <Fragment>
            <div style={{
                position: "absolute",
                display:displayState,
                width: "100%",
                height: "100vh",
                zIndex:"3",
                backgroundColor:"rgba(0,0,0,0.6)",
                backdropFilter:"blur(1px)",
                // overflowY:"scroll"
            }} onClick={()=>Dispatch(toggleDisplay("none"))}>
                <Grid container sx={{
                    position: "absolute",
                    left: "30%",
                    top: "10%",
                    zIndex: "1",
                    margin: "20px",
                    padding: "20px",
                    width: "35%",
                    height:"fit-content",
                    backdropFilter: "blur(5px)",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    textAlign: "left",
                }} direction="column" onClick={(e)=>e.stopPropagation()}>
                    <Grid item sx={{
                        margin:"3px",
                        padding:"3px"
                    }}>
                        <label style={{
                            fontSize:"20px",
                            fontWeight:"700"
                        }}>Edit Board</label>
                    </Grid>
                    <Grid item sx={{
                        margin:"5px",
                        padding:"5px"
                    }}>
                        <label style={{
                            padding:"5px 0",
                            margin:"5px 0",
                            color:"lightgray",
                            fontWeight:"700"
                        }}>Board Name</label><br />
                        <input type="text" readOnly value={BoardName} style={{
                            padding:"10px",
                            margin:"10px 0",
                            width:"90%",
                            borderRadius:"7px",
                            border:"solid 0.6px",
                            borderColor:"#FCE9F1"
                        }}></input>
                    </Grid>
                    <Grid item>
                        <label style={{
                            padding:"5px 0",
                            margin:"5px 0",
                            color:"lightgray",
                            fontWeight:"700"
                        }}>Board Columns</label>
                        <Grid container direction="column" sx={{
                            flexWrap:"nowrap",
                            overflowY:"scroll",
                            height:"20vh"
                        }}>
                            
                            {(columns!=[]) && columns.map((ele,i)=>(
                            <Grid item key={i}>
                                <Grid sx={{
                                    margin: "5px 0",
                                    width: "100%",
                                }} direction="row" container>
                                    <Grid sx={{
                                        width: "90%",
                                        border: "1px solid lightgrey",
                                        padding: "5px",
                                        borderRadius: "10px"
                                    }} item>{ele.columnName}</Grid>
                                    <Grid sx={{
                                        padding: "5px",
                                        cursor: "pointer"
                                    }} item>X</Grid>
                                </Grid>
                            </Grid>
                            )) }
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button sx={{
                            width: "95%",
                            fontWeight: "600",
                            textTransform: "capitalize",
                            backgroundColor: "#FCE9F1",
                            borderRadius: "50px",
                            marginTop:"15px"
                        }}>+ Add New Column</Button>
                    </Grid>
                    <Grid item>
                        <Button sx={{
                            width:"95%",
                            fontWeight:"600",
                            textTransform:"capitalize",
                            backgroundColor:"#4942E4",
                            borderRadius:"50px",
                            color:"white",
                            ":hover":{
                                color:"#1976d2"
                            }
                        }}>Save Changes</Button>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
}

export default EditBoard;