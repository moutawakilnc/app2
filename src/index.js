import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap';
import './sass/custom.scss';
import './index.scss';
import Form from './app/composants/Form';
import List from './app/composants/List';
import { Provider } from 'react-redux';
import { store } from './store';
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import LoginPage from './admin/LoginPage';
import reportWebVitals from './reportWebVitals';
import Inscription from './app/composants/Inscription';
import Appback from './admin/Appback';
import { majInscriptionAction } from './routes/actionHandler';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { selectFormState } from './reducer/formReducer';
import ListAs from './app/composants/ListAs';
import { loadData,CheckLogin } from './commonFnc';
import Header from './routes/Header';


const router=createBrowserRouter([
  
  {path:'/',
    element: <Root/>,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"inscriptions",
        element:<List />,
      },
      {
        path:"inscriptions/:index",
        
        loader:({params})=>
        {
            return store.getState().inscription[params.index];
        },
        element:<Inscription />,
      },
      {
        path:"ajouter",
        loader:()=>{ return {id:-1,name:"",dateNaissance:""}}
        ,
        element:<Form mode="0"/>
      },{
        path:"editer",
        element:<List isMaj={true}/>
      },
      {
        path:"editer/:index",
        loader:({params})=>
          {
             return  {...store.getState().inscription[params.index],index:params.index};
          },
        element:
        <div className=''>
            <Form isMaj={true}/>
        </div>,
       
      },
      {
        path:"supprimer",
        element:
        <div className=''>
         <List isDel={true}></List>
        </div>
      },
      {
        path:"data",
        element:
        <div className=''>
          <ListAs />
        </div>
      },
      {
        path:"login",
        element: <CheckLogin />
      },
      {
        path:"admins",
        element: <Appback/>,
        
      }
    ]
  }

])  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {<Provider store={store}><RouterProvider router={router}/></Provider>
}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
