import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/Layout/Layout.jsx";
import Home from "../pages/Home/Home.jsx";
import CardInner from "../components/CardInner/CardInner.jsx";
import SingIn from "../components/SingIn/login/SingIn.jsx";
import Catalog from "../pages/Catalog/CatalogReacl/Catalog.jsx";
import AddContent from "../pages/AddContent/AddContent.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path:'card',
                element: <CardInner/>
            },
            {
                path:'login',
                element:<SingIn/>
            },
            {
                path:'catalog',
                element:<Catalog/>
            },
            {
                path:'addContent',
                element:<AddContent/>
            }
        ]
    }
])