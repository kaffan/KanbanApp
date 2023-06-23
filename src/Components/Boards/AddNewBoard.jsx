import { Button, Grid } from "@mui/material";
import { Fragment } from "react";
import ReactDOM from 'react-dom';

const AddNewBoard = () =>{
    return (
      <Fragment>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            zIndex:"3",
            backgroundColor:"rgba(0,0,0,0.6)",
            backdropFilter:"blur(1px)"
          }}
        >
          <Grid
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
                <Grid container sx={{
                    overflowY:"auto",
                }}></Grid>
              </form>
            </Grid>
            <Grid item sx={{
                margin:"5px",
                padding:"5px"
            }}>
              <Button sx={{
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
};
ReactDOM.createPortal(AddNewBoard, document.getElementById('portal1'));
export default AddNewBoard;