import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import mainReducer from '../components/main/mainSlice';
import pricingReducer from './slices/pricing/pricingSlice';
import expertReducer from './slices/expert/expertSlice';
import customerReportReducer from './slices/customerReport/customerReport';
import offersReducer from './slices/offers/offersSlice';

const store = configureStore({
    reducer:{
        auth:authReducer,
        main:mainReducer,
        pricing:pricingReducer,
        experts:expertReducer,
        customerReports:customerReportReducer,
        offers: offersReducer,
    }
})


export default store