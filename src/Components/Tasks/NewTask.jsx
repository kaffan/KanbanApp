import { Grid } from "@mui/material";
import { Fragment } from "react";

const NewTask = () =>{
    return(
        <Fragment>
            <div>
                <Grid container>
                    <Grid item>
                        <span>Add New Task</span>
                    </Grid>
                    <Grid item>
                        <label>Title</label>
                        <input type="text" placeholder="e.g. Take coffee break"></input>
                    </Grid>
                    <Grid item>
                        <label>Description</label>
                        <input type="text"></input>
                    </Grid>
                    <Grid>

                    </Grid>
                    <Grid>

                    </Grid>
                    <Grid>

                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
}

export default NewTask;