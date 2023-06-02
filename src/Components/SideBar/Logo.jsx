import { Fragment } from "react";
import { Grid } from "@mui/material"

const Logo = () =>{
    return(
        <Fragment>
            <div style={{
                width:"100%",
                height:"97px",
                backgroundColor:"white",
                position:"relative"
            }}>
                <Grid container direction="column" sx={{
                    position:"relative",
                    left:"12%",
                    right:"0",
                    top:"33px",
                    width:"max-content"
                }}>
                    <Grid item>
                        <img src="assets/logo-dark.svg"></img>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
}

export default Logo;