import { configureStore } from '@reduxjs/toolkit';
import ShowSideBar from '../Reducers/ShowSideBar';
import AddNewBoardB from '../Reducers/AddNewBoardB';
import Boards from '../Reducers/Boards';
import AddNewTask from '../Reducers/AddNewTask';
import EditBoard from '../Reducers/EditBoard';
import SetTaskView from '../Reducers/SetTaskView';
import Columns from '../Reducers/Columns';

export const Store = configureStore({
    reducer:{
        ShowSideBar:ShowSideBar,
        AddNewBoardB: AddNewBoardB,
        Boards:Boards,
        Columns:Columns,
        AddNewTask:AddNewTask,
        EditBoard:EditBoard,
        TaskView:SetTaskView,
    }
});
