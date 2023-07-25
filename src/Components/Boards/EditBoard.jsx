import { Button, Grid } from "@mui/material";
import { Fragment } from "react";

const EditBoard = () =>{
    return(
        <Fragment>
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                zIndex:"3",
                backgroundColor:"rgba(0,0,0,0.6)",
                backdropFilter:"blur(1px)",
            }}>
                <Grid container sx={{
                    position: "absolute",
                    left: "30%",
                    top: "25%",
                    zIndex: "1",
                    margin: "20px",
                    padding: "20px",
                    width: "35%",
                    height:"fit-content",
                    backdropFilter: "blur(5px)",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    textAlign: "left",
                }}>
                    <Grid item sx={{
                        margin:"3px",
                        padding:"3px"
                    }}>
                        <label style={{
                            fontSize:"20px",
                            fontWeight:"700"
                        }}>Edit Board</label>
                    </Grid>
                    <Grid item sx={{
                        margin:"5px",
                        padding:"5px"
                    }}>
                        <label style={{
                            padding:"5px 0",
                            margin:"5px 0",
                            color:"lightgray",
                            fontWeight:"700"
                        }}>Board Name</label><br />
                        <input type="text" readOnly style={{
                            padding:"10px",
                            margin:"10px 0",
                            width:"90%",
                            borderRadius:"7px",
                            border:"solid 0.6px",
                            borderColor:"#FCE9F1"
                        }}>Element</input>
                    </Grid>
                    <Grid item>
                        <label style={{
                            padding:"5px 0",
                            margin:"5px 0",
                            color:"lightgray",
                            fontWeight:"700"
                        }}>Board Columns</label>
                        <Grid container direction="column" sx={{
                            flexWrap:"nowrap",
                            overflowY:"scroll",
                            height:"20vh"
                        }}>
                            <Grid item>
                                <Grid sx={{
                                    margin: "5px 0",
                                    width: "100%",
                                }} direction="row" container>
                                    <Grid sx={{
                                        width: "90%",
                                        border: "1px solid lightgrey",
                                        padding: "5px",
                                        borderRadius: "10px"
                                    }} item>Element</Grid>
                                    <Grid sx={{
                                        padding: "5px",
                                        cursor: "pointer"
                                    }} item>X</Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid sx={{
                                    margin: "5px 0",
                                    width: "100%",
                                }} direction="row" container>
                                    <Grid sx={{
                                        width: "90%",
                                        border: "1px solid lightgrey",
                                        padding: "5px",
                                        borderRadius: "10px"
                                    }} item>Element</Grid>
                                    <Grid sx={{
                                        padding: "5px",
                                        cursor: "pointer"
                                    }} item>X</Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid sx={{
                                    margin: "5px 0",
                                    width: "100%",
                                }} direction="row" container>
                                    <Grid sx={{
                                        width: "90%",
                                        border: "1px solid lightgrey",
                                        padding: "5px",
                                        borderRadius: "10px"
                                    }} item>Element</Grid>
                                    <Grid sx={{
                                        padding: "5px",
                                        cursor: "pointer"
                                    }} item>X</Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid sx={{
                                    margin: "5px 0",
                                    width: "100%",
                                }} direction="row" container>
                                    <Grid sx={{
                                        width: "90%",
                                        border: "1px solid lightgrey",
                                        padding: "5px",
                                        borderRadius: "10px"
                                    }} item>Element</Grid>
                                    <Grid sx={{
                                        padding: "5px",
                                        cursor: "pointer"
                                    }} item>X</Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid sx={{
                                    margin: "5px 0",
                                    width: "100%",
                                }} direction="row" container>
                                    <Grid sx={{
                                        width: "90%",
                                        border: "1px solid lightgrey",
                                        padding: "5px",
                                        borderRadius: "10px"
                                    }} item>Element</Grid>
                                    <Grid sx={{
                                        padding: "5px",
                                        cursor: "pointer"
                                    }} item>X</Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button sx={{
                            width: "95%",
                            fontWeight: "600",
                            textTransform: "capitalize",
                            backgroundColor: "#FCE9F1",
                            borderRadius: "50px",
                            marginTop:"15px"
                        }}>+ Add New Column</Button>
                    </Grid>
                    <Grid item>
                        <Button sx={{
                            width:"100%",
                            fontWeight:"600",
                            textTransform:"capitalize",
                            backgroundColor:"#4942E4",
                            borderRadius:"50px",
                            color:"white",
                            ":hover":{
                                color:"#1976d2"
                            }
                        }}>Save Changes</Button>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
}

export default EditBoard;