
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

/* all related logic to a slice/reducer into reducer file */



export const authAdmin=createAsyncThunk("auth/login",async ({pseudo,motDePasse},{dispatch})=>{
    const config={
      headers:{
        'content-type':'application/json'
      }
    }
    await fetch("http://localhost:3001/admins",config).then(e=>e.json()).then(e=>{
        for(var cred of e)
        {
          if(cred.pseudo==pseudo && cred.password==motDePasse)
          {
            console.log(cred);
            dispatch({type:'auth/addAdminSession',payload:cred})
            return;
          }
        }
        
     }).catch(e=>"erreur interne");
     

}) 


const  initialState={
  chargement:false,
  adminInfo:{},
  erreur:null,
  connecte:false}


 

  /* a thi ;) */

export const authSlice=createSlice({
  name:'auth',
  initialState,
  reducers:{
    addAdminSession:(state,action)=>
    {
      state.connecte=true;
      state.adminInfo=action.payload;
 
      console.log(state);
    },
    deleteAdminSession:(state)=>
    {
      
      state.connecte=false;
      state.adminInfo={};
      console.log("cool")
    }

  },
  extraReducers:(builder)=>
  {
    builder.addCase(authAdmin.pending,(state)=>{
    
      state.chargement=true;
      
    });
    builder.addCase(authAdmin.fulfilled,(state,{payload})=>{
      state.chargement=false;
    });

  }
})

export default authSlice.reducer;
/* ACTION */

export const selectAuth=state=>state.auth;

export const isConnected=state=>state.auth.connecte;

export const {deleteAdminSession} =authSlice.actions;