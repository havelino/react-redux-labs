import {actionTypes} from './action-types'

export const saveToLocalStorageMiddleware = ({ getState, dispatch }) => next => action => {
    next(action);
    const now = new Date();
    const { first, last } = getState().person.name;
    localStorage["name"] = `${first} ${last}`;
    localStorage["lastVisit"] = now;
};

export const loggerMiddleware = ({ getState, dispatch }) => next => action => {
    const now = new Date();
    console.log(`${now.toLocaleDateString('en-US')} - loggerMiddleware : calling action ${action.type} with payload : ${JSON.stringify(action.payload)}`);
    next(action);
};

export const fetchApis = ({ getState, dispatch }) => next => action => {
    
    if (action.type === actionTypes.FETCH_PERSON) {
        console.log("calling https://randomuser.me/api")
        fetch("https://randomuser.me/api")
            .then(resp =>resp.json())
            .then(persons => {
                const person = persons.results[0];
                dispatch({type: actionTypes.SET_PERSON,payload:{person:person}});
                dispatch({type: actionTypes.SET_NAME,payload:{name:person.name}});
                dispatch({type: actionTypes.SET_LOCATION,payload:{location:person.location}});
            });
    }

    if(action.type === actionTypes.FETCH_CITY_STATE){
        console.log(`calling http://api.zippopotam.us/us/${action.payload.id}`);
        fetch(`http://api.zippopotam.us/us/${action.payload.id}`)
        .then(resp => resp.json())
        .then(postCode =>{
            dispatch({type : actionTypes.SET_CITY, payload :{city :postCode.places[0]['place name']}});
            dispatch({type : actionTypes.SET_STATE, payload :{state :postCode.places[0].state}});
        });
    }
    next(action);
}
