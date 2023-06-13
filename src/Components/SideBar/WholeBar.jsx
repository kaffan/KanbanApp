import { Grid } from "@mui/material";
import { Fragment } from "react";
import SideBar from "./SideBar";
import Logo from "./Logo";
import { useSelector } from "react-redux";

const WholeBar = () =>{
    const state = useSelector((state)=>state.ShowSideBar);
    return(
        <Fragment>
            <Grid container
            sx={{
                height:"100%",
                width:"100%",
                backgroundColor:"rgb(244, 247, 253)"
            }}>
                <Grid item sx={{
                    height:"20%",
                    width:"100%",
                    boxShadow:"0.5px 0.5px 2px #979797",
                }}>
                    <Logo></Logo>
                </Grid>
                {state &&<Grid item sx={{
                    height:"80%",
                    width:"100%",
                    boxShadow:"0.5px 0.5px 2px #979797",

                }}>
                    <SideBar></SideBar>
                </Grid>
                }
            </Grid>
        </Fragment>
    );
}

export default WholeBar;