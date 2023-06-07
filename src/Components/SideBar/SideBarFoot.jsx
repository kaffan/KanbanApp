import { Grid } from "@mui/material";
import { Fragment } from "react"

const SideBarFoot = () =>{
    return(
        <Fragment>
            <Grid container sx={{
                width:"100%",
                paddingLeft:"9%"
            }}>
                <Grid item>
                    <div style={{
                        width:"93%",
                        height:"48px"
                    }}>
                        <Grid container direction="column" sx={{
                            width:"60%",
                            alignContent:"center",
                            alignItems:"center"
                        }}>
                            <Grid item>
                                <img src="assets/icon-light-theme.svg" />
                            </Grid>
                            <Grid item>
                            <img src="assets/icon-light-theme.svg" />
                            </Grid>
                            <Grid item>

                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item>

                </Grid>
            </Grid>
        </Fragment>
    );
}

export default SideBarFoot;