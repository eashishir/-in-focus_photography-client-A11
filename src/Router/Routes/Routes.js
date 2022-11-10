import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllService/AllServices";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/Login/LogIn";
import Register from "../../Pages/Register/Register";
import Resister from "../../Pages/Register/Register";
import Reviews from "../../Pages/Reviews/Reviews";
import ViewDetails from "../../Pages/VeiwDetails/ViewDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/services',
                element:<AllServices></AllServices>
            },
            {
                path:'/reviews',
                element:<PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
            {
                path:'/details/:id',
                element:<ViewDetails></ViewDetails>,
                loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
        ],
        
    },
    {
        path:'*', 
        element: <ErrorPage></ErrorPage>
    }
])

export default router;