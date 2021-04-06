import { combineReducers } from 'redux';
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./user.reducer";
import userList from "./listUser.reducer";

const persistConfig = {
	key:'root-main',
	storage
}

const rootReduce= combineReducers({
	user,
	userList
});

const persistedReducer = persistReducer(persistConfig,rootReduce)

export default persistedReducer;