import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-bars loading-lg text-center align-middle"></span>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

PrivetRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
export default PrivetRoute;