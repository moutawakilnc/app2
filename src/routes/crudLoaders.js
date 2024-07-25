import { redirect } from "react-router-dom";
import { deleteInscription } from "../reducer/inscriptionReducer";
import { useDispatch } from "react-redux";
import { store } from "../store";

export function deleteLoader(params) {
    store.dispatch({type:"inscription/deleteInscription",payload:params.index});
    return redirect("/supprimer")
}


export function deconnexionLoader() {
    store.dispatch({type:"auth/deleteAdminSession"});
    return redirect("/")
}