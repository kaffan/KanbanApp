import { Grid } from "@mui/material";
import { Fragment } from "react";

const Column = ({col}) =>{
    console.log(col.columnName)
    return(
        <Fragment>
            <Grid container>
                <Grid item>
                    {col.columnName}
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Column;