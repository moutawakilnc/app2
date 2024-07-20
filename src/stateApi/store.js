import { combineReducers, configureStore, createAction, createReducer } from "@reduxjs/toolkit"
import rootReducer from "./reducer/personneReducer";
import  personneReducer  from './reducer/personneReducer'
import formReducer from "./reducer/formReducer";

let state = {
    list: [
            {id:1,name:'jean',dateNaissance:"2000-03-03"},
            {id:2,name:'christophe',dateNaissance:"1992-05-17"},
            {id:3,name:"bill",dateNaissance:"1995-10-20"
        }],
    form:{
        id:"",
        name:"",
        dateNaissance:""}
};


export const store = configureStore(
    {
        preloadedState: state,
        reducer:{list:personneReducer,form:formReducer }
    }
)