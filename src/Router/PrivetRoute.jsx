import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  if (loading) {
    return (
      <div className=" flex h-screen items-center">
        <span className="loading loading-bars loading-lg mx-auto "></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location?.pathname || '/'} ></Navigate>;
};

PrivetRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivetRoute;
