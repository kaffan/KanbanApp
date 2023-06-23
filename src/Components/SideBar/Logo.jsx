import { Fragment } from "react";
import { Grid } from "@mui/material"

const Logo = () =>{
    return(
        <Fragment>
            <div style={{
                width:"100%",
                height:"100%",
                backgroundColor:"white",
                position:"relative",
                // boxShadow: "4px 0px 4px rgba(0, 0, 0, 0.25)"
            }}>
                <Grid container direction="column" sx={{
                    position:"absolute",
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