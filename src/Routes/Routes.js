import Blog from "../Pages/Blog/Blog";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");
const { default: Categories } = require("../Pages/Categories/Categories");
const { default: Home } = require("../Pages/Home");
const { default: Login } = require("../Users/Login");
const { default: Register } = require("../Users/Register");

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