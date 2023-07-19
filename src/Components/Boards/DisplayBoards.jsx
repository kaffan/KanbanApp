import { Fragment } from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import NoColumns from "../Columns/NoCloumns";
import ColumnDisplay from "../Columns/ColumnDisplay";

const DisplayBoards = () =>{
    const state = useSelector((state)=>state.Boards.find((ele)=>ele.clicked===true))
    return(
        <Fragment>
            {/* <Header Element={state}></Header> */}
            {(state.columns) ? <NoColumns></NoColumns> : <ColumnDisplay></ColumnDisplay>}
        </Fragment>
    )
}

export default DisplayBoards;