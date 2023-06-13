import { configureStore } from '@reduxjs/toolkit';
import ShowSideBar from '../Reducers/ShowSideBar';

export const Store = configureStore({
    reducer:{
        ShowSideBar:ShowSideBar,
    }
});
