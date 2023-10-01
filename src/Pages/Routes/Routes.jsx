import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home/Home";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import DashboardLayout from "../../Layout/DashboardLayout";
import Startups from "../Features/Startups/Startups";
import PublicUser from "../Features/Public Users/PublicUser";
import Vlogs from "../Features/Vlogs & More/Vlogs";
import Investors from "../Features/Investors/Investors";
import Payment from "../../Payment/Payment";




  export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: 'signup',
            element:<SignUp></SignUp>
        },
        {
            path: 'login',
            element:<Login></Login>
        },
        {
            path: 'vlogs',
            element:<Vlogs></Vlogs>
        },
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout></DashboardLayout>,
      // errorElement: <DisplayError></DisplayError>,
      children: [
        {
          path:'/dashboard',
          element:<Startups></Startups>
        },
        {
          path:'dashboard/publicuser',
          element:<PublicUser></PublicUser>
        },
        {
          path:'dashboard/investors',
          element:<Investors></Investors>
        },
        {
          path:'/dashboard/dashboard/investors/dashboard/payment',
          element:<Payment></Payment>
        },
      ]
    }
]);