import { Fragment } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import SideColumn from "../SideBar/SideColumn";
import NoBoard from "../Boards/NoBoard";
import { Grid } from "@mui/material";
import ShowSideBar from "../SideBar/ShowSideBar";

const MainPage = () =>{
    return(
    <Fragment>
        <Grid container direction="row" sx={{
            width:"100%",
            height:"100%"
        }}>
            <Grid item  sx={{
                width:"21%"
            }}>
                <SideBar></SideBar>
            </Grid>
            <Grid item sx={{
                width:"79%",
                position:"relative"
            }}>
                <NoBoard></NoBoard>
                <ShowSideBar></ShowSideBar>
            </Grid>
        </Grid>
       
    </Fragment>
    );
}

export default MainPage;