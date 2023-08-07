import { Grid } from "@mui/material";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Column from "./Column";
import { toggleDisplay } from "../../Reducers/EditBoard";

const ColumnDisplay = ({columns, CurrentBoard}) =>{
    // const boardColumns = useSelector((state)=>state.Boards.columns);
    const Dispatch = useDispatch();
    return(
        <Fragment>
            <Grid container direction="row" spacing={2} sx={{
                height:"85%",
                weight:"100%",
                padding:"15px",
                flexWrap:"nowrap",
                overflowX:"scroll",
                '&::-webkit-scrollbar':{
                    width:"0.6em"
                }
            }}>
                {columns.map((ele,i)=>(
                    <Grid sx={{
                        minWidth:"22%",
                        height:"100%"
                    }} key={i} item>
                        <Column CurrentBoard={CurrentBoard} col={ele}></Column>
                    </Grid>
                ))}
                <Grid item sx={{
                    minWidth:"15%"
                }}>
                <Grid container direction="column" sx={{
                    minWidth:"100%",
                    height:"100%"
                }}>
                    <Grid item sx={{
                        height:"18%"
                    }}>

                    </Grid>
                    <Grid onClick={()=>Dispatch(toggleDisplay("block"))} item sx={{
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