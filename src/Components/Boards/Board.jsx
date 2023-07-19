import { Fragment } from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import NoBoard from "./NoBoard";
import DisplayBoards from "./DisplayBoards";

const Board = () =>{
    const Boards = useSelector((state)=>state.Boards);
    console.log(Boards);
    return(
        <Fragment>
            {(Boards.length!==0) ? <DisplayBoards></DisplayBoards> : <NoBoard></NoBoard>}
        </Fragment>
    );
}

export default Board;