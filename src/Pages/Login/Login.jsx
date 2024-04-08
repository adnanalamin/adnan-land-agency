import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Login = () => {
    const loc= useLocation();
    
    console.log(loc)
    useEffect(() => {
        document.title = loc.pathname.split('/').join([]);
      }, [loc]);
    return (
        <div>
            <h1>Login</h1>
            <Link to='/register'>Register</Link>
        </div>
    );
};

export default Login;