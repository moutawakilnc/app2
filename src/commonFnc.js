
import { Navigate } from "react-router";
import LoginPage from "./admin/LoginPage";
export const checkDayMonth = (a,type="d") => {
  try{
    a=Number(a);
    
    // logic here that can dispatch actions or read state
    if(type=="m")
    return Number(a)<10?"0"+(a+1):(a+1);
    return a;
  }
  catch(Exception){ return -1}
  }
  



  export async function loadData(){
    const data=await fetch("https://api.mocki.io/v2/bn1n8gd9").then(response=>response.json());
 
    return data;
  }

  export const CheckLogin=()=>1==1?<LoginPage />:<Navigate to="/admins" />


  export const isLogged=()=>1==1?true:false;



  const checkCredentials= (storeData)=> (next)=> async (action)=>{

    if(action.type=="login/toggleConnection")
    {
      const checkLogins=await fetch("http://localhost:3001/admins").then(response=>response.json()).then(jsonData=>jsonData.admins);
  
      checkLogins.map((e)=>e.pseudo==action.payload.pseudo)
      
  
    }
  
  
  }
  