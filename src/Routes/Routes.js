import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home";
import Login from "../Users/Login";
import Register from "../Users/Register";


export const router = createBrowserRouter([
    {
    path:'/',
    element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/home',element:<Home></Home>},
        {path:'/categories',element:<Categories></Categories>},
        {path:'/blog',element:<Blog></Blog>},
        {path:'/login',element:<Login></Login>},
        {path:'/register',element:<Register></Register>}
    ]
    }
])