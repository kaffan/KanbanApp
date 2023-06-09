import { Fragment } from "react";

const ShowSideBar = () =>{
    return(
        <Fragment>
            <div style={{
                position:"relative",
                top:"75%",
                height:"48px",
                width:"56px"
            }}>
                <div style={{
                    borderRadius:"0px 100px 100px 0px",
                    backgroundColor:"#635FC7",
                    height:"100%",
                    width:"100%"
                }}>
                    <img style={{
                        position:"relative",
                        top:"25%"
                    }} src="assets/icon-show-sidebar.svg" />
                </div>
            </div>
        </Fragment>
    );
}

export default ShowSideBar;