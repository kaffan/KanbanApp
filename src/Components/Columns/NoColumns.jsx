import { Button, Grid } from "@mui/material";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDisplay } from "../../Reducers/EditBoard";

const NoColumns = () =>{
    const boards = useSelector((state)=>state.Boards);
    console.log(boards);
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
                    There are no columns present. Create a new column
                </Grid>
                <Grid item>
                    &nbsp;
                </Grid>
                <Grid item>
                    <Button onClick={()=>Dispatch(toggleDisplay("block"))} variant="contained" sx={{
                        textTransform:"none",
                        borderRadius:"50px",
                        backgroundColor:"#635FC7",
                        color:"white"
                    }}>+ Add a new column</Button>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default NoColumns;