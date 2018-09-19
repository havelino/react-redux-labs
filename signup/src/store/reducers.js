
import { actionTypes } from "./action-types"

const personReducer = (state, action) => {
    if (!action) return state;
    switch (action.type) {
        case actionTypes.SET_PERSON:
            return { ...action.payload.person };
        case actionTypes.SET_EMAIL:
            return { ...state, email: action.payload.email };
        case actionTypes.SET_CELL:
            return { ...state, cell: action.payload.cell };
        default:
            return state;
    }
}


const nameReducer = (state, action) => {
    if (!action) return state;
    switch (action.type) {
        case actionTypes.SET_NAME:
            return { ...action.payload.name };
        case actionTypes.SET_TITLE:
            return { ...state, title: action.payload.title };
        case actionTypes.SET_FIRST:
            return { ...state, first: action.payload.first };
        case actionTypes.SET_LAST:
            return { ...state, last: action.payload.last };
        default:
            return state;
    }
}

const locationReducer = (state, action) => {
    if (!action) return state;
    switch (action.type) {
        case actionTypes.SET_LOCATION:
            return { ...action.payload.location };
        case actionTypes.SET_STREET:
            return { ...state, street: action.payload.street };
        case actionTypes.SET_CITY:
            return { ...state, city: action.payload.city };
        case actionTypes.SET_STATE:
            return { ...state, state: action.payload.state };
        case actionTypes.SET_POSTCODE:
            return { ...state, postcode: action.payload.postcode };
        default:
            return state;
    }
}


const mainReducer = (state, action) => {
    if (!action) return state;
    switch (action.type) {
        case 'SET_LAST_VISIT':
            return { ...state, lastVist: action.payload.lastVist }
        case 'SET_SAVED_NAME':
            return { ...state, savedName: action.payload.savedName }
        default:
            return state;
    }
};

const rootReducer = (state, action) => ({
    ...mainReducer(state, action),
    person: {
        ...personReducer(state.person, action),
        name: nameReducer(state.person.name, action),
        location: locationReducer(state.person.location, action)
    }
});

export default rootReducer;