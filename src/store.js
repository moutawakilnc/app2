import { configureStore} from "@reduxjs/toolkit"
import  inscriptionReducer  from './reducer/inscriptionReducer'
import formReducer from "./reducer/formReducer";
import { majIndex } from "./reducer/formReducer";
import loginReducer from "./reducer/authReducer";
import authReducer from "./reducer/authReducer";
import { useNavigate } from "react-router";



const resetIndex=(storeData)=>(next)=>(action)=>{
  
  const act=next(action);
  if(action.type=="inscription/majInscription")
    {
      storeData.dispatch({type:'form/majIndex'});
    }
    
  return act;

}

/* middleware deconnexion ? */
const checkDeconnexion=()=>(next)=>(action)=>
{
  if(action.type=="auth/deleteAdminSession")
  {
    
    next(action)
  }
  else
  {
    next(action);
  }
}

/*
const allowUser=()=>(next)=>(action)=>
  {
    const arr=["inscription/addInscription","inscription/deleteInscription","inscription/majInscription"];
    if(arr.includes(action.type))
    {
      store.getState().auth.connecte?next(action):alert("non autorisé");
      
      return;
    }

    next(action)

  }

*/

export const store = configureStore({
  
  reducer: {
    inscription:inscriptionReducer,
    form: formReducer,
    auth:authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([checkDeconnexion])});


/*
    */




