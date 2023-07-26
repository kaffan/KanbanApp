import { Button, Grid } from "@mui/material";
import { Fragment } from "react";
import Logo from "../SideBar/Logo";
import { useDispatch, useSelector } from "react-redux";
import { toggleDisplay } from "../../Reducers/AddNewTask";

const Header = () =>{
    const Boards = useSelector((state)=>state.Boards);
    const Board = (Boards!==[]) ? Boards.find((ele)=>ele.clicked) : false;
    const Dispatch = useDispatch();
    console.log(Board);
    return(
        <Fragment>
            <Grid container direction="column" sx={{
                height:"100%",
                width:"100%"
            }}>
                <Grid item sx={{
                    height:"100%",
                    width:"21%",
                    borderRight:"solid 0.5px lightgrey"
                    // position:"relative"
                }}>
                    <Logo></Logo>
                </Grid>
                <Grid item sx={{
                    height:"100%",
                    width:"79%",
                    backgroundColor:"white"
                }}>
                    {Board &&
                    <Grid container sx={{
                        position:"relative",
                        left:"0",
                        right:"0",
                        top:"33px",
                    }}>
                        <Grid item sx={{
                            width:"75%",
                            textAlign:"left",
                            fontWeight:"700",
                            fontSize:"23px",
                            padding:"0 20px",
                            textTransform:"capitalize"
                        }}>
                            {Board.name}
                        </Grid>
                        <Grid item sx={{
                            flexGrow:"0.3",
                            width:"15%"
                        }}>
                            <Button disabled={(Board.columns.length===0) ? true : false}
                            onClick={()=>Dispatch(toggleDisplay("none"))}
                            variant="contained"
                            sx={{
                            textTransform:"none",
                            borderRadius:"50px",
                            backgroundColor:"#635FC7",
                            color:"white"
                            }}>Add a new task</Button>
                        </Grid>
                        <Grid item sx={{
                            flexGrow:"0.2",
                            width:"10%"
                        }}>

                        </Grid>
                    </Grid>}
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Header;