import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import mainReducer from '../components/main/mainSlice';


const store = configureStore({
    reducer:{
        auth:authReducer,
        main:mainReducer,
    }
})


export default store