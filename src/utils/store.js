import { configureStore } from "@reduxjs/toolkit";
import appSice from "./appSice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer:{
        app: appSice,
        search: searchSlice,
        chat: chatSlice
        
    }
});

export default store;