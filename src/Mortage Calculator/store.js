import { configureStore } from "@reduxjs/toolkit";
import CalcReducer from './feature/mortageSlice/mortageCal'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
} from 'redux-persist'
import { useEffect } from "react";

const persistConfig = {
  key: 'root',
  storage,
  version: 1
}

const persistedReducer = persistReducer(persistConfig,CalcReducer)

export const store = configureStore({
  reducer: {
    mortgage: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store) 