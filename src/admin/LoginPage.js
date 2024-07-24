
import { CheckLogin,isLogged } from "../commonFnc";
import { useForm } from "react-hook-form";
import { toggleConnection,selectLoginState } from "../reducer/loginReducer";
import { useDispatch, useSelector } from "react-redux";
export default function LoginPage()
{
    const selectLogin=useSelector(selectLoginState);
    const dispatch=useDispatch();
    const {register,handleSubmit}= useForm();
console.log(selectLogin)

    const submitForm=(data)=>{

        dispatch(toggleConnection());
        
    }

    return (<div class="w-50" onSubmit={handleSubmit(submitForm)}>
            <form className="form">
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" {...register("pseudo",{required:true})} name="pseudo" className="form-control"/>
                </div>
                <div class="form-group">
                    <label>Mot de passe</label>
                    <input type="text" {...register("motDePasse",{required:true})} name="motDePasse" className="form-control"/>
                </div>
                <input type="submit" className="btn btn-primary mt-3" value="se connecter"/>
            </form>
        </div>);
}