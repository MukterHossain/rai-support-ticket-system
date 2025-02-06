
import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Error from "../shared/Error";
import SignUp from "../pages/SignUp";
import Dashboard from '../dashboard/Dashboard'
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
        },
        {
            path:'/login',
            element: <Login></Login>,
        },
        {
            path:'/signup',
            element: <SignUp></SignUp>,
        },
        {
            path:'/dashboard',
            element:<Dashboard></Dashboard>,
        },
      ]
    },
  ]);

  export default router