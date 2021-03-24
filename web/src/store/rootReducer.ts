import { combineReducers } from "redux";

import NotLoggedInfoReducer from './NotLoggedInfo';

export default combineReducers({
    NotLoggedInfo: NotLoggedInfoReducer
});