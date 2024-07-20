import { useStore } from "react-redux";
import { useSelector,useDispatch } from "react-redux";
import personneReducer from "../../stateApi/reducer/personneReducer";
import { checkDate } from "../../stateApi/mlw";

function List()
{
    
    const list=useSelector((state)=>state.list);
    const dispatch=useDispatch();
    console.log("UI List Update");
    return (
        <table className="table">
            <thead>
                <tr>
                <td>Id</td>
                <th>Nom</th>
                <th>date naissance</th>
                <th>#</th>
                <th>#</th>
                </tr>
            </thead>
        <tbody>
            {list.map((e,i)=>{
                //var j=i;
                return (<tr key={i}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.dateNaissance}</td>
            <td><li onClick={(a)=>{dispatch({type:"MAJ_ALL",payload:{id:e.id,name:e.name,dateNaissance:e.dateNaissance}})}}></li></td>
            <td><li onClick={(a)=>{dispatch({type:"DELETE_PERSONNE",payload:{id:i}})}}></li></td>
            </tr>)})}
        </tbody>
        
        </table>);

}


export default List;
