import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/custom.scss';
import './index.scss';
import App from './app/App';
import ErrorPage from './routes/ErrorPage';
import reportWebVitals from './reportWebVitals';
import LoginPage from './routes/LoginPage';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router=createBrowserRouter([
  {path:'/',
    element:<App />,
    errorElement:<ErrorPage />
  },
  { path:'login',
    element:<LoginPage />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {//<RouterProvider router={router}/>
}
<App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
