import { createStore, applyMiddleware } from 'redux'
import * as user from '../user.json';
import reducer from './reducers';
import {saveToLocalStorageMiddleware,readFromLocalStorageMiddleware} from './middleware';

const initialState = { person: user , lastVisit : '2018-09-23', savedName :''};
const middleware = applyMiddleware(saveToLocalStorageMiddleware,readFromLocalStorageMiddleware)

export const store = createStore(reducer, initialState, middleware);


