import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeState } from "../../Reducers/ShowSideBar";

const ShowSideBar = () =>{
    const Dispatch = useDispatch();
    // const state = useSelector((state)=>state.ShowSideBar);
    return(
        <Fragment>
            <div style={{
                position:"absolute",
                top:"85%",
                height:"48px",
                width:"56px",
                // '&:hover':{
                //     cursor:"pointer"
                // }
            }}>
                <div style={{
                    borderRadius:"0px 100px 100px 0px",
                    backgroundColor:"#635FC7",
                    height:"100%",
                    width:"100%",
                    cursor:"pointer"
                }} onClick={()=>Dispatch(ChangeState())}>
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