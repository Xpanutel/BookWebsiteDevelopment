import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/Layout/Layout.jsx";
import Home from "../pages/Home/Home.jsx";
import CardInner from "../components/CardInner/CardInner.jsx";
import SignIn from "../components/SingIn/login/SignIn.jsx";
import Catalog from "../pages/Catalog/CatalogReacl/Catalog.jsx";
import AddContent from "../pages/AddContent/AddContent.jsx";
import Marks from "../pages/marks/Marks.jsx";

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
                element:<SignIn/>
            },
            {
                path:'catalog',
                element:<Catalog/>
            },
            {
                path:'addContent',
                element:<AddContent/>
            },
            {
                path:'marks',
                element:<Marks/>
            },
        ]
    }
])