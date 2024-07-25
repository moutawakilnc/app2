
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authAdmin } from "../reducer/authReducer";
import { useNavigate } from "react-router";

export default function LoginPage()
{
    const {chargement}=useSelector(state=>state.auth);
    const isConnected=useSelector(state=>state.auth.connecte);
    const dispatch=useDispatch();
    const {register,handleSubmit,formState:{errors}}=useForm();
    const nav=useNavigate();

    const submitForm=(data)=>{
       dispatch(authAdmin(data)); 

    }

/* redirection login*/
   useEffect(()=>{
            isConnected===true&&nav('/admins')
    },[isConnected,chargement])

    return (<div class="w-50" onSubmit={handleSubmit(submitForm)}>
            <form className="form">
                <div class="form-group">
                    <label>Pseudo</label>
                    <input autoComplete="false" type="text" {...register("pseudo",{required:true})} name="pseudo" className="form-control"/>

                    {errors.pseudo?.type==="required" &&(<p className="text-danger">champs vide</p>)}
                    
                    
                </div>
                <div class="form-group">
                    <label>Mot de passe</label>
                    <input autoComplete="false" type="text" {...register("motDePasse",{required:true})} name="motDePasse" className="form-control"/>

                    {errors.motDePasse?.type==="required" &&(<p className="text-danger">champs vide</p>)}
                </div>
                <input type="submit" className="btn btn-primary mt-3" value="se connecter"/>
            </form>
        </div>);
}