import { store } from "./store";
import { actionTypes} from "./action-types"

export const actions ={
    setFisrtName : value => store.dispatch({type : actionTypes.SET_FIRST,payload:{first:value}}),

    setLastName : value => store.dispatch({type : actionTypes.SET_LAST,payload:{last:value}}),

    setTitle : value => store.dispatch({type : actionTypes.SET_TITLE,payload:{title:value}}),

    setStreet : value => store.dispatch({type : actionTypes.SET_STREET,payload:{street:value}}),

    setCity : value => store.dispatch({type : actionTypes.SET_CITY,payload:{city:value}}),

    setState : value => store.dispatch({type : actionTypes.SET_STATE,payload:{state:value}}),

    setPostCode : value => store.dispatch({type : actionTypes.SET_POSTCODE,payload:{postcode:value}}),

    setEmail : value => store.dispatch({type : actionTypes.SET_EMAIL,payload:{email:value}}),

    setCell : value => store.dispatch({type : actionTypes.SET_CELL,payload:{cell:value}}),

    setPerson : value => store.dispatch({type : actionTypes.SET_PERSON, payload:{person:value}}),
    setName : value => store.dispatch({type : actionTypes.SET_NAME, payload:{name:value}}),
    setLocation : value => store.dispatch({type : actionTypes.SET_LOCATION, payload:{location:value}}),

    fetchPerson : ()=> store.dispatch({type : actionTypes.FETCH_PERSON}),
    fetchCityAndState : value=> store.dispatch({type : actionTypes.FETCH_CITY_STATE, payload :{id:value}})
}