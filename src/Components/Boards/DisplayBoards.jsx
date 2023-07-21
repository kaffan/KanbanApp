import { Fragment } from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import NoColumns from "../Columns/NoColumns";
import ColumnDisplay from "../Columns/ColumnDisplay";

const DisplayBoards = () =>{
    const state = useSelector((state)=>state.Boards.find((ele)=>ele.clicked));
    console.log(state);
    return(
        <Fragment>
            {/* <Header Element={state}></Header> */}
            {(state.columns.length!==0) ? <ColumnDisplay></ColumnDisplay> : <NoColumns></NoColumns>}
        </Fragment>
    )
}

export default DisplayBoards;