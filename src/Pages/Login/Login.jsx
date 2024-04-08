import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const loc= useLocation();
    useEffect(() => {
        document.title = loc.pathname.split('/').join([]);
      }, [loc]);


    const {userSignIn} = useContext(AuthContext)

    const handelForm = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        userSignIn(email, password)
        .then(() => {
            console.log('result.user')
        })
        .catch(error => {
            console.error(error.message)
        })
    }
 return (
        <div className="w-2/4 mx-auto">
            <form onSubmit={handelForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>
            <p>New to visite this website ? Please <Link className="text-blue-600" to='/register'>Register</Link></p>
        </div>
      </form>
            
        </div>
    );
};

export default Login;