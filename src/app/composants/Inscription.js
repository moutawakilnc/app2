
import { useSelector, useDispatch } from "react-redux";
import { selectInscriptionState } from "../../reducer/inscriptionReducer";
import { useLoaderData } from "react-router";
export default function Inscription()
{
    const {id,name,dateNaissance,bio}=useLoaderData();

    
    return (<div id="article">
        <h3>{id}</h3>
        <span>{name}</span>
        <span>{dateNaissance}</span>
        <p>{bio}</p>

    </div>)


}