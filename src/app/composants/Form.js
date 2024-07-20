import React from "react"
import { useDispatch,useSelector } from "react-redux"
import { checkDate } from "../../stateApi/mlw";
function Form()
{
    const state=useSelector((state)=>state.form);
    const dispatch=useDispatch();
    return (<><div id="logo-globe" className="mx-auto my-2">
      
        </div><form className="form d-flex flex-column align-items-center">
                <div className="form-group col-sm-6">
                    <label htmlFor="idInput">Id</label>
                    <input value={state.id} type="text" className="form-control" id="idInput" onInput={(e)=>dispatch({type:"MAJ_ID",payload:{
                        id:e.target.value
                    }})}/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="nameInput"></label>
                    <input value={state.name} type="text" className="form-control" id="nameInput" onInput={(e)=>dispatch({type:"MAJ_NAME",
                        payload:{name:e.target.value}
                    })}/>
                  
                </div>
                <div className="form-group  col-sm-6">
                    <label htmlFor="dateInput"></label>
                    <input value={state.dateNaissance}  type="date" className="form-control" id="dateInput" onChange={(e)=>dispatch({type:"MAJ_DATE",
                        payload:{dateNaissance:e.target.value}
                    })}/>
                </div>
                
                <input value="valider" className="btn btn-success my-3" type="button" onClick={()=>{dispatch({type:"ADD_PERSONNE",payload:state})}}/>
  
            </form></>)
}


export default Form;