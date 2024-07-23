import { configureStore} from "@reduxjs/toolkit"
import  inscriptionReducer  from './reducer/inscriptionReducer'
import formReducer from "./reducer/formReducer";
import { majIndex } from "./reducer/formReducer";


const resetIndex=(storeData)=>(next)=>(action)=>{
  
  const act=next(action);
  if(action.type=="inscription/majInscription")
    {
      storeData.dispatch({type:'form/majIndex'});
      
    }
    
  return act;

}

export const store = configureStore({
  reducer: {
    inscription:inscriptionReducer,
    form: formReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(resetIndex)
});


/*
    */



