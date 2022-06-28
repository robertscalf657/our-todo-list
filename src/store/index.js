import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist"
import todoReducer from "../features/todoSlice"


const persistConfig = {
    key: "root",
    storage
}

const reducer = combineReducers({
    todos:todoReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
reducer:persistedReducer,
middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER]
        }
    })
});


export let persistor = persistStore(store);