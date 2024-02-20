import { thunk } from "redux-thunk"
// import logger from "redux-logger"
import { configureStore } from "@reduxjs/toolkit"
import { persistStore } from "redux-persist"
import persistedReducer from "./combine-reducer"

const middleware = [thunk]

// middleware.push(logger)

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
})

export const persistor = persistStore(store)
