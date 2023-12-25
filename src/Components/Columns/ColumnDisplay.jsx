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
                position:"relative",
                height:"100%",
                minWidth:"100vw",
                flexWrap:"nowrap",
                padding:"0 7px",
                margin:"0",
                overflowX:"scroll",
                '&::-webkit-scrollbar':{
                    width:"0.6em"
                }
            }}>
                {columns.map((ele,i)=>(
                    <Grid sx={{
                        minWidth:"280px",
                        height:"100%"
                    }} key={i} item>
                        {console.log(ele)}
                        <Column CurrentBoard={CurrentBoard} col={ele}></Column>
                    </Grid>
                ))}
                <Grid item sx={{
                    minWidth:"280px"
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
                        top:"10%",
                        background: "linear-gradient(to bottom,rgba(121,132,147,.2),rgba(130,143,163,.1),rgba(130,143,163,0))",
                        height:"100%",
                        minWidth:"100%",
                        color:"#828fa3",
                        fontSize:"24px",
                        fontWeight:"700"
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