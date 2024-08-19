import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import loadingSlice from './loadingSlice'
import darkSlice from './darkSlice'

const store = configureStore({
    reducer: {
        auth: authSlice,
        loading: loadingSlice,
        dark: darkSlice,
        // post: postSlice
    }
});

export default store;