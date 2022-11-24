import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories";
import Products from "../Pages/Categories/Products/Products";
import Home from "../Pages/Home/Home";
import Login from "../Users/Login";
import Register from "../Users/Register";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
    path:'/',
    element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/home',element:<Home></Home>},
        {path:'/about',element:<About></About>},
        {path:'/categories',element:<Categories></Categories>},
        {path:'/blog',element:<Blog></Blog>},
        {path:'/login',element:<Login></Login>},
        {path:'/register',element:<Register></Register>},
        {path:'/products/:categoryName',
        loader:async({params})=>fetch(`${process.env.REACT_APP_PORT}/products/${params.categoryName}`),
        element:<PrivateRoute><Products></Products></PrivateRoute>}
    ]
    }
])