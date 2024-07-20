
import { createReducer } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";

/* all related logic to a slice/reducer into reducer file */
const ADD_PERS="ADD_PERSONNE";
const MAJ_PERS="MAJ_PERSONNE";
const DEL_PERS="DELETE_PERSONNE";


const  initialState=[];

export default function personneReducer(state=initialState,action)
{
  switch(action.type)
  {
    case ADD_PERS:
      const indexExistant=state.findIndex(obj=> obj.id==action.payload.id);
     if(indexExistant==-1){
      return [...state,action.payload]}
     else{
      const newState = state.map((personne, index) => index === indexExistant ? action.payload : personne)
   
      return newState;
     }
      

    case DEL_PERS:
      return [...state].filter((item,index)=>action.payload.id!==index);
    case MAJ_PERS:
      return [...state].filter((item,index)=>action.payload.id!==index);
    default:
      return state;
  }




}




