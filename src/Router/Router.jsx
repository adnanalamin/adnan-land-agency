import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Root from "../Layout/Root/Root";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/updateProfile',
          element: <UpdateProfile></UpdateProfile>
        },
        {
          path: '/property/:id',
          element: <PropertyDetails></PropertyDetails>,
          loader: () => fetch('/data.json')
        }
      ]
    },
  ]);

  export default router;