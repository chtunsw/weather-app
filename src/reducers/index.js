import { combineReducers } from "redux";
import page from "./page";
import weather from "./weather";

export default combineReducers({
    page,
    weather
});