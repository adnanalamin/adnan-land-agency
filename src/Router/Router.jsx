import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Root from "../Layout/Root/Root";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";

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
        }
      ]
    },
  ]);

  export default router;