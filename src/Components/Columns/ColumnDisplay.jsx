import { Grid } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Column from "./Column";

const ColumnDisplay = ({columns}) =>{
    // const boardColumns = useSelector((state)=>state.Boards.columns);
    return(
        <Fragment>
            <Grid container direction="row" spacing={2} sx={{
                height:"85%",
                padding:"15px",
            }}>
                {columns.map((ele,i)=>(
                    <Grid sx={{
                        width:"22%",
                        height:"100%"
                    }} key={i} item>
                        <Column col={ele}></Column>
                    </Grid>
                ))}
                <Grid item sx={{
                    width:"15%"
                }}>
                <Grid container direction="column" sx={{
                    width:"100%",
                    height:"100%"
                }}>
                    <Grid item sx={{
                        height:"18%"
                    }}>

                    </Grid>
                    <Grid item sx={{
                        position:"relative",
                        backgroundColor:"#E9EFFA",
                        height:"80%",
                    }}>
                        <span style={{
                            position:"relative",
                            top:"50%",
                            left:"0",
                        }}>+ New Column</span>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default ColumnDisplay;