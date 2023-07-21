import { Grid } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Column from "./Column";

const ColumnDisplay = ({columns}) =>{
    // const boardColumns = useSelector((state)=>state.Boards.columns);
    return(
        <Fragment>
            <Grid container direction="row" sx={{
                minHeight:"40%"
            }}>
                {columns.map((ele,i)=>(
                    <Grid key={i} item>
                        <Column col={ele}></Column>
                    </Grid>
                ))}
            </Grid>
        </Fragment>
    );
}

export default ColumnDisplay;