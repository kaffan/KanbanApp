import { configureStore } from '@reduxjs/toolkit';
import ShowSideBar from '../Reducers/ShowSideBar';
import AddNewBoardB from '../Reducers/AddNewBoardB';

export const Store = configureStore({
    reducer:{
        ShowSideBar:ShowSideBar,
        AddNewBoardB: AddNewBoardB
    }
});
