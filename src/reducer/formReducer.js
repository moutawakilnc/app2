
import { createSlice } from "@reduxjs/toolkit";
import { checkDayMonth } from "../commonFnc";
/* all related logic to a slice/reducer into reducer file */

var y=new Date(Date.now()).getFullYear();
var m=new Date(Date.now()).getMonth();
var d=new Date(Date.now()).getDate();

m=checkDayMonth(m,"m");
d=checkDayMonth(d);

console.log(checkDayMonth())


const initialState={ 
    index:-1,  
            id:"",
            name:"",
            dateNaissance:`${y}-${m}-${d}`
}



export const formSlice=createSlice({
    name:'form',
    initialState,
    reducers:{
        majIndex:(state,action)=>
        {
            state.index=-1;
        },
        majId:(state,action)=>
        {
            state.id=action.payload;
        },
        majName:(state,action)  =>
        {
            state.name=action.payload
        },
        majDateNaissance:(state,action)=>
        {
            state.dateNaissance=action.payload;
        },
        majTout:(state,action)=>
        {
            state.index=action.payload.index;
            state.id=action.payload.id;
            state.name=action.payload.name;
            state.dateNaissance=action.payload.dateNaissance;
        }

    }


})

export const {majIndex,majId,majName,majDateNaissance,majTout}=formSlice.actions;

export const selectFormState=(state)=>state.form;

export default formSlice.reducer;
