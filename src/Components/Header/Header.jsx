import { Button, Grid } from "@mui/material";
import { Fragment } from "react";
import Logo from "../SideBar/Logo";
import { useSelector } from "react-redux";

const Header = () =>{
    const Board = useSelector((state)=>state.Boards.find((ele)=>ele.clicked));
    return(
        <Fragment>
            <Grid container direction="column" sx={{
                height:"100%",
                width:"100%"
            }}>
                <Grid item sx={{
                    height:"100%",
                    width:"21%",
                    // position:"relative"
                }}>
                    <Logo></Logo>
                </Grid>
                <Grid item sx={{
                    height:"100%",
                    width:"79%"
                }}>
                    {(Board!={}) && 
                    <Grid container>
                        <Grid item>
                            {Board.name}
                        </Grid>
                        <Grid item>
                            <Button disabled={(Board.columns!=[] ? false : true)}
                            sx={{
                            textTransform:"none",
                            borderRadius:"50px",
                            backgroundColor:"#635FC7",
                            color:"white"
                            }}>Add a new task</Button>
                        </Grid>
                    </Grid>}
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Header;