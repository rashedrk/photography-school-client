import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MyClasses from "../pages/Dashboard/Student/MyClasses/MyClasses"
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import Feedback from "../pages/Dashboard/Admin/Feedback/Feedback";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'instructors',
                element: <Instructors/>
            },
            {
                path: 'classes',
                element: <Classes/>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children: [
            //user route
            {
                path: "myclasses",
                element:<MyClasses/>
            },

            //admin route
            {
                path: "manageclasses",
                element: <ManageClasses/>
            },
            {
                path: "manageusers",
                element: <ManageUsers/>
            },
            {
                path: "feedback/:id",
                element: <Feedback/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);