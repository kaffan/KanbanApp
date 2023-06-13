import { Grid, Switch } from "@mui/material";
import { Fragment } from "react"
import { useSelector, useDispatch } from "react-redux";
import { ChangeState } from "../../Reducers/ShowSideBar";

const SideBarFoot = () =>{

    // const state = useSelector((state)=>state.ShowSideBar);
    const Dispatch = useDispatch();
    return(
        <Fragment>
            <Grid container sx={{
                width:"100%",
                paddingLeft:"9%"
            }}>
                <Grid item sx={{
                    width:"100%"
                }}>
                    <div style={{
                        width:"93%",
                        height:"48px",
                        backgroundColor:"#F4F7FD",
                        filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                    }}>
                        <Grid container direction="row" sx={{
                            width:"100%",
                            justifyContent:"center",
                            alignItems:"center",
                            height:"48px"
                        }}>
                            <Grid item>
                                <img src="assets/icon-light-theme.svg" />
                            </Grid>
                            <Grid item>
                                <Switch></Switch>
                            </Grid>
                            <Grid item>
                                <img src="assets/icon-dark-theme.svg" />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item sx={{
                    width:"100%",
                    textAlign:"left",
                    height:"38px",
                    paddingTop:"15px",
                    cursor:"pointer"
                }} onClick={()=>Dispatch(ChangeState())}>
                    <img src="assets/icon-hide-sidebar.svg"  />
                    &nbsp;&nbsp;
                    Hide Sidebar
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default SideBarFoot;