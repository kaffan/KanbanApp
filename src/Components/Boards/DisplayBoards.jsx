import { Fragment } from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import NoColumns from "../Columns/NoColumns";
import ColumnDisplay from "../Columns/ColumnDisplay";
// import CurrentBoard from "../../Reducers/CurrentBoard";

const DisplayBoards = () =>{
    const state = useSelector((state)=>state);
    const CurrentBoard = useSelector((state)=>state.Boards.find((ele)=>ele.clicked));
    const columns = [...state.Columns].filter((ele)=>ele.boardName===CurrentBoard.name);
    console.log(state);
    return(
        <Fragment>
            {/* <Header Element={state}></Header> */}
            {columns && (columns.length!==0) ? <ColumnDisplay CurrentBoard={state} columns={columns}></ColumnDisplay> : <NoColumns></NoColumns>}
        </Fragment>
    )
}

export default DisplayBoards;