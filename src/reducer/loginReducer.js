
import { createSlice } from "@reduxjs/toolkit";

/* all related logic to a slice/reducer into reducer file */

const  initialState={value:false}



export const loginSlice=createSlice({
  name:'login',
  initialState,
  reducers:{
    toggleConnection:(state,action)=>
    {
        state.value=state.value?false:true;
        console.log("login Reducer");
    },
  
  }
})

export default loginSlice.reducer;

export const {toggleConnection}=loginSlice.actions;

export const selectLoginState=(state)=>state.login;

