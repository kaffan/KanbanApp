import { Grid } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Column from "./Column";

const ColumnDisplay = () =>{
    const boardColumns = useSelector((state)=>state.Boards.columns);
    return(
        <Fragment>
            <Grid container>
                {boardColumns.map((ele)=>(
                    <Grid item>
                        <Column col={ele}></Column>
                    </Grid>
                ))}
            </Grid>
        </Fragment>
    );
}

export default ColumnDisplay;