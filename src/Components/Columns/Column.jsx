import { Grid } from "@mui/material";
import { Fragment } from "react";

const Column = ({col}) =>{
    console.log(col)
    return(
        <Fragment>
            <Grid container direction="column"
            sx={{
                textAlign:"left",
                height:"100%",
                overflowY:"scroll",
                overflowX:"hidden",
                flexWrap:"nowrap",
                '&::-webkit-scrollbar': {
                    width: '0'
                  },
            }}>
                <Grid item 
                sx={{
                    margin:"15px 0"
                }}>
                    {col.columnName}
                </Grid>
                {(col.columnTasks) && col.columnTasks.map((ele,i)=>(
                <Grid key={i} item sx={{
                    padding:"15px 10px",
                    backgroundColor:"white",
                    width:"100%",
                    boxShadow:"2px 2px 5px lightgrey",
                    borderRadius:"7px",
                    fontSize:"17px",
                    fontWeight:"700",
                    margin:"10px 0"
                }}> 
                  {ele.name}
                </Grid>))}
            </Grid>
        </Fragment>
    );
}

export default Column;