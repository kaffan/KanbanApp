import { Fragment } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import SideColumn from "../SideBar/SideColumn";
import NoBoard from "../Boards/NoBoard";
import { Grid } from "@mui/material";
import ShowSideBar from "../SideBar/ShowSideBar";
import WholeBar from "../SideBar/WholeBar";
import { useSelector } from "react-redux";
import Board from "../Boards/Board";
// import Header from "../Header/Header";

const MainPage = () =>{
    const state = useSelector((state)=>state.ShowSideBar);
    return(
    <Fragment>
            <Grid container direction="column" sx={{
                position: "relative",
                height: "100%",
                width: "100%"
            }}>
                <Grid item sx={{
                    height: "20%",
                    width: "100%",
                }}>
                    <Header></Header>
                </Grid>
                <Grid item sx={{
                    height: "80%",
                    width: "100%"
                }}>
                    <Grid container direction="row" sx={{
                        width: "100%",
                        height: "100%"
                    }}>
                        {state && <Grid item sx={{
                            width: "300px"
                        }}>
                            <WholeBar></WholeBar>
                        </Grid>
                        }
                        <Grid item sx={{
                            width: (state) ? "calc(100% - 300px)" :"100%",
                            position: "relative",
                            overflowX:"scroll",
                            '&::-webkit-scrollbar': {
                                width: '0.6em'
                              }
                        }}>
                            <Board></Board>
                            {!state && <ShowSideBar></ShowSideBar>}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    </Fragment>
    );
}

export default MainPage;