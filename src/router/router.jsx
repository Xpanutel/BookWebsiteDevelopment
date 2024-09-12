import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/Layout/Layout.jsx";
import Home from "../pages/Home/Home.jsx";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[{
            index:true,
            element:<Home/>
        }]
    }
])