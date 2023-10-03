import { Button, Grid } from "@mui/material";
import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDisplay } from "../../Reducers/EditBoard";
import { UpdateBoard } from "../../Reducers/Boards";
// import { updateCurrentBoard } from "../../Reducers/CurrentBoard";
import { AddColumn } from "../../Reducers/Columns";

const EditBoard = () =>{
    const Dispatch = useDispatch();
    const ref = useRef();
    const state = useSelector((state)=>state);
    console.log(state);
    const CurrentBoard = useSelector((state)=>state.Boards.find((ele)=>ele.clicked));
    const BoardName = (Object.keys(CurrentBoard).length) ? CurrentBoard.name: "";
    console.log([...state.Columns]);
    const [ columns, SetColumns ] = useState(()=>([...state.Columns].filter((ele)=>{
        // console.log(ele);
        if(ele[1]===BoardName)
          return ele;
    })));
    console.log(columns);
    const [ displayState2, SetDisplayState2 ] = useState("none");
    const EditBoardHandler = () =>{
        const payload = columns.map((ele)=>ele);
        console.log(payload);
        Dispatch(AddColumn(payload))
        Dispatch(toggleDisplay());
    }
    const addHandler = () =>{
        const NewColumn = [ref.current.value, BoardName];
        ref.current.value = "";
        SetColumns((prevState)=>[...prevState, NewColumn]);
        closeHandler();
    }
    const closeHandler = ()=>{
        SetDisplayState2("none");
    }
    return(
        <Fragment>
            <div style={{
                position: "absolute",
                display:"block",
                width: "100%",
                height: "100vh",
                zIndex:"3",
                backgroundColor:"rgba(0,0,0,0.6)",
                backdropFilter:"blur(1px)",
                // overflowY:"scroll"
            }} onClick={()=>Dispatch(toggleDisplay())}>
                <Grid container direction="column" sx={{
                    position:"relative",
                    zIndex:"4",
                    top:"33%",
                    left:"34%",
                    backgroundColor:"lightgrey",
                    display: displayState2,
                    width: "30%",
                    padding:"30px"
                }} onClick={(e)=>e.stopPropagation()}>
                    <Grid item sx={{
                        padding:"10px"
                    }}>
                        <label style={{
                            fontWeight:"700"
                        }}>New Column Name</label>
                    </Grid>
                    <Grid item sx={{
                        padding:"10px"
                    }}>
                        <input type="text" ref={ref} style={{
                            padding:"7px 10px",
                            border:"solid 1px grey",
                            borderRadius:"7px",
                            width:"80%"
                        }}></input>
                    </Grid>
                    <Grid sx={{
                        padding:"10px"
                    }}>
                        <Button onClick={addHandler} sx={{margin:"0 2px"}} variant="contained">Click To Add</Button>
                        <Button onClick={closeHandler} sx={{margin:"0 2px"}} variant="outlined" color="warning">Close</Button>
                    </Grid>
                </Grid>
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
                            height:"10vh"
                        }}>
                            
                            {(columns.length!=0) && columns.map((ele,i)=>(
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
                                    }} item>{ele[0]}</Grid>
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
                        }} onClick={()=>SetDisplayState2("block")}>+ Add New Column</Button>
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
                        }} onClick={EditBoardHandler}>Save Changes</Button>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
}

export default EditBoard;