
import { useSelector,useDispatch } from "react-redux";
import { loadData } from "../../commonFnc";
import { majTout } from "../../reducer/formReducer";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

function ListAs()
{
    const [data,setData]=useState([]);
    

    useEffect(()=>{loadData().then((e)=>setData(e.person))},[]);
    
    return (
        <div className="col-12 col-sm-10">
        <table className="table">
            <thead>
                <tr>
                <td>Id</td>
                <th>Nom</th>
                <th>date naissance</th>
                </tr>
            </thead>
        <tbody>
      {console.log(data)}
            {data?.map((e,index)=>{
                //var j=i;
                return (<tr key={index}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.dateNaissance}</td>
            </tr>)})}
        </tbody>
        
        </table></div>);
}





export default ListAs;
