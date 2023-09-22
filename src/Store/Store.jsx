import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import { RootReducer } from '../Reducers/RootReducer';

enableMapSet();
console.log(1);
const rootReducer = RootReducer;

export const Store = configureStore({
    reducer : rootReducer,
});
