import { createStore, applyMiddleware } from 'redux'
import * as user from '../user.json';
import reducer from './reducers';
import {saveToLocalStorageMiddleware,loggerMiddleware,fetchApis} from './middleware';

const lastVisit = localStorage["lastVisit"];
const savedName = localStorage["name"];

const initialState = { person: user , lastVisit : lastVisit, savedName :savedName};
const middleware = applyMiddleware(saveToLocalStorageMiddleware,loggerMiddleware,fetchApis);

export const store = createStore(reducer, initialState, middleware);


