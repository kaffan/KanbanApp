import { Button, Grid } from "@mui/material";
import { Fragment, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { toggleDisplay } from "../../Reducers/AddNewBoardB";
import { useDispatch, useSelector } from "react-redux";

const AddNewBoard = () =>{
  const state = useSelector((state)=>state.AddNewBoardB);
  const [ displayState, SetDisplayState] = useState("none");
  const [ columnState, SetColumnState ] = useState([]);
  const Dispatch = useDispatch();
  const ref = useRef(null);
  const ref2 = useRef(null);
  console.log(state);
  const columnHandler = () =>{
    if(ref2.value!==''){
      console.log(ref2.current.value);
      SetColumnState((prevState)=>[...prevState,ref2.current.value]);
      toggleDisplayState();
    }
  }
  const clickHandler = () =>{
    console.log(ref.current.style.display);
    const currentDisplay = ref.current.style.display;
    Dispatch(toggleDisplay(currentDisplay));
  }
  const toggleDisplayState = () =>{
    (displayState==='none') ? SetDisplayState('block') : SetDisplayState('none'); 
  }
  return (
    <Fragment>
      <div
        ref = {ref}
        onClick={clickHandler}
        style={{
          display: state,
          position: "absolute",
          width: "100%",
          height: "100vh",
          zIndex:"3",
          backgroundColor:"rgba(0,0,0,0.6)",
          backdropFilter:"blur(1px)",
        }}
      >
        <Grid container direction="column" onClick={(e)=>e.stopPropagation()}
        sx={{
          position:"relative",
          zIndex:"4",
          top:"43%",
          left:"34%",
          backgroundColor:"lightgrey",
          display: displayState,
          width: "30%",
          padding:"30px"
        }}>
          <Grid item sx={{
            padding:"10px"
          }}>
            <span style={{
              fontWeight:"700"
            }}>Column Name</span>
          </Grid>
          <Grid item sx={{
            padding:"10px"
          }}>
            <input type="text"
            ref={ref2}
            style={{
              padding:"4px 4px",
              border:"1px ",
              boxShadow:"1px 1px 5px black",
              borderColor:"#FCE9F1",
              width:"90%"
            }}></input>
          </Grid>
          <Grid item sx={{
            padding:"10px"
          }}>
            <Button onClick={columnHandler} sx={{margin:"0 2px"}} variant="contained">Add Column</Button>
            <Button onClick={toggleDisplayState} sx={{margin:"0 2px"}} variant="outlined" color="warning">Close</Button>
          </Grid>
        </Grid>
        <Grid
          onClick={(e)=>e.stopPropagation()}
          container
          direction="column"
          sx={{
            position: "absolute",
            left: "30%",
            top: "25%",
            zIndex: "1",
            margin: "20px",
            padding: "20px",
            width: "35%",
            height:"fit-content",
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(255, 255, 255, 1)",
            textAlign: "left",
          }}
        >
          <Grid item sx={{
              margin:"3px",
              padding:"3px"
          }}>
            <span style={{
              fontSize:"20px",
              fontWeight:"700"
            }}>Add New Board</span>
          </Grid>
          <Grid item sx={{
              margin:"5px",
              padding:"5px"
          }}>
            <form>
              <label style={{
                  padding:"5px 0",
                  margin:"5px 0",
                  color:"lightgray",
                  fontWeight:"700"
              }}>Name</label>
              <br />
              <input
                type="text"
                placeholder="e.g. Web Design"
                name="BoardN"
                id="N"
                style={{
                  padding:"10px",
                  margin:"10px 0",
                  width:"90%",
                  // border:"0.6px",
                  borderColor:"#FCE9F1"
                }}
              />
              
              <br></br>
              <label style={{
                  padding:"5px 0",
                  margin:"5px 0",
                  color:"lightgray",
                  fontWeight:"700"
              }}>Columns</label>
              <Grid container direction="row" sx={{
                  overflowY:"scroll",
                  maxHeight:"6em",
                  width:"100%"
              }}>
                {(columnState) && columnState.map((ele,i)=>{
                  return(
                    <Grid sx={{
                      width:"100%"
                    }} key={i} item>
                      <Grid sx={{
                        margin:"5px 0",
                        width:"100%"
                      }} direction="row" container>
                        <Grid sx={{
                          width:"90%",
                          border:"1px solid",
                          padding:"5px",
                          borderRadius:"25px"
                        }} item>{ele}</Grid>
                        <Grid sx={{
                          padding:"5px"
                        }} item>X</Grid>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </form>
          </Grid>
          <Grid item sx={{
              margin:"5px",
              padding:"5px"
          }}>
            <Button onClick={toggleDisplayState}
              sx={{
              width:"100%",
              fontWeight:"600",
              textTransform:"capitalize",
              backgroundColor:"#FCE9F1",
              borderRadius:"50px"
            }}>+ Add New Column</Button>
          </Grid>
          <Grid item sx={{
              margin:"5px",
              padding:"5px"
          }}>
            <Button sx={{
              width:"100%",
              fontWeight:"600",
              textTransform:"capitalize",
              backgroundColor:"#4942E4",
              borderRadius:"50px",
              color:"white",
              ":hover":{
                  color:"#1976d2"
              }
            }}>Create New Board</Button>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default AddNewBoard;