import { combineReducers } from "redux";
import { workReducer } from "./worksReducer";
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
    works: workReducer,
    app: appReducer,
})