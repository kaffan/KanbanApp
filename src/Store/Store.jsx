import { configureStore } from '@reduxjs/toolkit';
import ShowSideBar from '../Reducers/ShowSideBar';
import AddNewBoardB from '../Reducers/AddNewBoardB';
import Boards from '../Reducers/Boards';
import AddNewTask from '../Reducers/AddNewTask';

export const Store = configureStore({
    reducer:{
        ShowSideBar:ShowSideBar,
        AddNewBoardB: AddNewBoardB,
        Boards:Boards,
        AddNewTask:AddNewTask,
    }
});
