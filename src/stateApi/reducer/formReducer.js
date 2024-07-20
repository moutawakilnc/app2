import { createReducer } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";
import { checkDate } from "../mlw";
/* all related logic to a slice/reducer into reducer file */




export default function formReducer(state={},action)
{
    switch(action.type)
    {
        case "MAJ_ID":
            
            return {...state,id: action.payload.id};
        case "MAJ_NAME":
            return {...state,name:action.payload.name}
        case "MAJ_DATE":
            const date=action.payload.dateNaissance;
            
            return {...state,dateNaissance:date}
        case "MAJ_ALL":
            let dateNaissance=action.payload.dateNaissance;
            return {...action.payload,dateNaissance:dateNaissance};
        default:
            return state;
    }

}