
import { Outlet } from "react-router";
import Header from "./Header";
import { useSelector } from "react-redux";

export default function Root()
{
    const isConnected=useSelector(state=>state.auth.connecte);
   
    return (
    <div className="layout">
        
        <Header isConnected={isConnected}/>
        
        <div className="container">
            <div className="row justify-content-center py-5">
                    <Outlet />
             
            </div>
        </div>
    </div>);
}