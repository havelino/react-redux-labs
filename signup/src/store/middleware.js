export const saveToLocalStorageMiddleware = ({getState,dispatch}) =>next => action =>{
    next(action);
    const now  = new Date();
    const {first, last} = getState().person.name;
    localStorage["name"] = `${first} ${last}`;
    localStorage["lastVisit"] = now; 
    
};

export const readFromLocalStorageMiddleware = ({getState,dispatch}) =>next => action =>{
    const lastVisit = localStorage["lastVisit"];
    const savedName = localStorage["name"];
    //dispatch({type : "SET_SAVED_NAME", payload :{savedName : savedName}});
    //dispatch({type : "SET_LAST_VISIT", payload :{lastVisit : lastVisit}});
    next(action);
};