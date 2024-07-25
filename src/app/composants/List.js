
import { useSelector,useDispatch } from "react-redux";

import { majTout } from "../../reducer/formReducer";
import { deleteInscription ,selectInscriptionState} from "../../reducer/inscriptionReducer";
import { Link, useParams } from "react-router-dom";

function List({isMaj,isDel})
{
    const authState=useSelector((state)=>state.auth)
    const inscriptionState=useSelector(selectInscriptionState);

    const index=useParams();

    var isMaj=isMaj;//1= oui
    var isDel=isDel; //1 = oui

    

    const dispatch=useDispatch();
    return (
        <div className="col-12 col-sm-10">
        <table className="table">
            <thead>
                <tr>
                <td>Id</td>
                <th>Nom</th>
                <th>date naissance</th>
                {isMaj&&<th>#</th>}
                {isDel&&<th>supprimer</th>}
                </tr>
            </thead>
        <tbody>
  
            {inscriptionState.map((e,index)=>{
                //var j=i;
                return (<tr key={index}>
                   
                     
            <td>{e.id}</td>
            <td><Link to={"/inscriptions/"+index}>{e.name}</Link></td>
            <td>{e.dateNaissance}</td>
            {isMaj&&<td>
                <Link to={"/editer/"+index}>Modifier</Link>
             </td>}
             {isDel&&<td>
                    <Link to={"/supprimer/"+index}>Supprimer</Link>
                </td>}
             
            
           
            
         
            </tr>)})}
        </tbody>
        
        </table></div>);

}


export default List;
