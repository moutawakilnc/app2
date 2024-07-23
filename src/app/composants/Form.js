import React, { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { majId,majName,majDateNaissance,selectFormState } from "../../reducer/formReducer";
import { addInscription, majInscription } from "../../reducer/inscriptionReducer";
import { useForm,SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLoaderData } from "react-router";


function Form({isMaj})
{
    const selectForm=useSelector(selectFormState);
    console.log("ba1")
    const {id,name,dateNaissance,index}=useLoaderData();

    console.log(id)
    var isMaj=isMaj;//true = maj-> disable input till click
    
    const nav=useNavigate();

    const {register,handleSubmit,formState:{errors}}=useForm();
    


    const onSubmit=(data)=>{
        console.log(isMaj)
        !isMaj?dispatch(addInscription({...data,bio:''})):
        dispatch(majInscription({...data,index:index}));
    }

    const dispatch=useDispatch();
    return (<>
   
      <form onSubmit={handleSubmit(onSubmit)} className="form d-flex flex-column col-md-4 col-7">
                <div className="form-group  ">
                   
                    <label htmlFor="idInput">Id</label>

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