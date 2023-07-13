import { Button, Grid } from "@mui/material";
import { Fragment } from "react";
import { toggleDisplay } from "../../Reducers/AddNewBoardB";
import { useDispatch } from "react-redux";

const NoBoard = () =>{
    const Dispatch = useDispatch();
    return(
        <Fragment>
            <Grid container direction="column" sx={{
                position:"relative",
                top:"45%",
                left:"20%",
                width:"60%",
                justifyContent:"space-evenly"
            }}>
                <Grid item sx={{
                    fontFamily:"Plus Jakarta Sans",
                    fontWeight:"700",
                    fontSize:"18px",
                    color:"#828FA3"
                }}>
                    There are no boards present. Create a new board
                </Grid>
                <Grid item>
                    &nbsp;
                </Grid>
                <Grid item>
                    <Button onClick={()=>Dispatch(toggleDisplay('none'))} variant="contained" sx={{
                        textTransform:"none",
                        borderRadius:"50px",
                        backgroundColor:"#635FC7",
                        color:"white"
                    }}>+ Create a new board</Button>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default NoBoard;