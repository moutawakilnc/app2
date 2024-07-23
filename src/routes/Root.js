
import { Outlet } from "react-router";
import Header from "./Header";

export default function Root()
{
    return (
    <div className="layout">
        
        <Header />
        
        <div className="container">
            <div className="row justify-content-center py-5">
                    <Outlet />
             
            </div>
        </div>
    </div>);
}