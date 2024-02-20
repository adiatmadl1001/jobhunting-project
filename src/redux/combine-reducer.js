import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "./storage"

import blog from "./blog/reducer"
import user from "./user/reducer"
// import job from "./job/reducer"

const persistConfig = {
  key: "root",
  storage,
}
const combineReducer = combineReducers({
  user,
  blog,
})
const persistedReducer = persistReducer(persistConfig, combineReducer)

export default persistedReducer
