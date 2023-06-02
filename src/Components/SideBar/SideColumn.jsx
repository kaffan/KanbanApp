import { Grid } from "@mui/material";
import { Fragment } from "react";

const SideColumn = () =>{
    return(
        <Fragment>
            <div style={{
                width:"92%",

            }}>
                <Grid container sx={{
                    paddingLeft:"11%",
                    color:"#828FA3",
                    fontSize:"15px",
                    lineHeight:"20px",
                    fontWeight:"700"
                }}>
                    <Grid item>
                        <span>ALL BOARDS ({})</span>
                    </Grid>
                    <Grid item>
                        <span><img src="assets/icon-board.svg" /> + Create New Board</span>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
}

export default SideColumn;