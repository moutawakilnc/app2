
import { createSlice } from "@reduxjs/toolkit";

/* all related logic to a slice/reducer into reducer file */



const  initialState=[
  {id:1,name:'jean',dateNaissance:"2000-03-03",bio:""},
  {id:2,name:'christophe',dateNaissance:"1992-05-17",bio:""},
  {id:3,name:"bill",dateNaissance:"1995-10-20",bio:""}
];


export const inscriptionSlice=createSlice({
  name:'inscription',
  initialState,
  reducers:{
    addInscription:(state,action)=>
    {
      console.log(action.payload);
      state.push(action.payload);
    },
  deleteInscription:(state,action)=>
  { 
    return state.filter((item,index)=>
      {
        
         return action.payload!=index
  })
  },
  majInscription:(state,action)=>
  {
    let obj=action.payload.data;
    let index=obj.index;
    delete obj.index;
    return state.map((element,i)=>i==index?obj:element);
  }

  
  }
})

export default inscriptionSlice.reducer;

export const {addInscription,deleteInscription,majInscription}=inscriptionSlice.actions;

export const selectInscriptionState=(state)=>state.inscription;



