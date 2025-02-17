import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Root from "../Layout/Root/Root";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Contactus from "../Pages/Contactus/Contactus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/updateProfile",
        element: (
          <PrivetRoute>
            <UpdateProfile></UpdateProfile>
          </PrivetRoute>
        ),
      },
      {
        path: "/property/:id",
        element: (
          <PrivetRoute>
            <PropertyDetails></PropertyDetails>
          </PrivetRoute>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/userProfile",
        element: (
          <PrivetRoute>
            <UserProfile></UserProfile>
          </PrivetRoute>
        ),
      },
      {
        path: "/contactus",
        element: (
          <PrivetRoute>
            <Contactus></Contactus>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
