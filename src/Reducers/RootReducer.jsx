import ShowSideBar from './ShowSideBar';
import AddNewBoardB from './AddNewBoardB';
import Boards from './Boards';
import AddNewTask from './AddNewTask';
import EditBoard from './EditBoard';
import SetTaskView from './SetTaskView';
import Columns from './Columns';
import { combineReducers } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
enableMapSet();

export const RootReducer = combineReducers({
    ShowSideBar:ShowSideBar,
    AddNewBoardB: AddNewBoardB,
    Boards:Boards,
    Columns:Columns,
    AddNewTask:AddNewTask,
    EditBoard:EditBoard,
    TaskView:SetTaskView,
});