import React from "react"
import { useDispatch } from "react-redux"
import { addInscription, majInscription } from "../../reducer/inscriptionReducer";
import { useForm,SubmitHandler } from "react-hook-form";
import { useNavigate} from "react-router";
import { useLoaderData } from "react-router";


function Form({isMaj})
{
    const {id,name,dateNaissance,index}=useLoaderData();
    var isMaj=isMaj;//true = maj-> disable input till click
    
   const nav=useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm();
    


    const onSubmit=(data)=>{
        if(!isMaj)
        {   
            dispatch(addInscription({...data,bio:''}));
            nav("/inscriptions");
        }
        else
        {
            dispatch(majInscription({data}));
            nav("/editer");
        }
    }

    const dispatch=useDispatch();
    return (<>
   
      <form onSubmit={handleSubmit(onSubmit)} className="form d-flex flex-column col-md-4 col-7">
                <div className="form-group  ">
                   
                    <label htmlFor="idInput">Id</label>
                <input type="hidden" value={index} {...register("index")} name="index"/>
                    <input defaultValue={
                        isMaj&&id} 
                        
                        name="id" {...register("id",{required:true,validate:
                    {
                        matchPattern:(val)=>/^(\d)+$/.test(val)

                    }

                    })}  type="text" className="form-control" id="idInput" />
                   
                    {errors.id?.type==="required" &&(<p className="text-danger">Entrez un id</p>)}
                    {errors.id?.type==="matchPattern" &&(<p className="text-danger">Format 'id' doit etre numerique</p>)}
                </div>
        
                <div className="form-group ">
                    <label htmlFor="nameInput"></label>
                    <input defaultValue={
                        isMaj&&name} name="name"  {...register("name",{required:true,
                validate:{
                    checkLength:(val)=>val.length>=3,
                    matchPattern:(val)=>/(^[A-Za-z]+([ ]{0,1}[A-Za-z]+)*$)/.test(val)
                }})} 
                
                 type="text" className="form-control" id="nameInput"/>
                    {errors.name?.type==="required" &&(<p className="text-danger">Entrez votre nom</p>)}
                    {errors.name?.type==="matchPattern" &&(<p className="text-danger">Format 'nom' invalide</p>)}
                    {errors.name?.type==="checkLength" &&(<p className="text-danger">'nom' trop court</p>)}
                </div>


                <div className="form-group">
                    <label htmlFor="dateInput"></label>
                    <input defaultValue={
                        isMaj&&dateNaissance}
                    name="dateNaissance"
                    {...register("dateNaissance",{required:true,
                      
                        
                    })}  type="date" className="form-control" id="dateInput"/>
                    {errors.dateNaissance?.type==="required" &&(<p className="text-danger">Entrez une date</p>)}
                </div>
                
                <input type="submit" className="btn btn-primary my-4"/>
  
            </form></>)
}


export default Form;