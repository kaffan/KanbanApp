import { Grid } from "@mui/material";
import { Fragment } from "react";
import Logo from "../SideBar/Logo";

const Header = () =>{
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

                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Header;