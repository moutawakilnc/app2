
import { useSelector } from "react-redux"
import { Route, redirect, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from "../admin/LoginPage";

const Rediriger=()=>
{
    
}


export const AddresseCheckComposant=({element})=>
{
    const isConnected=useSelector(state=>state.auth.connecte);

    console.log(isConnected);

    return isConnected?element:(<LoginPage />)
}


