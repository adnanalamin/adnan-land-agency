import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Login = () => {
  const loc = useLocation();
  useEffect(() => {
    document.title = loc.pathname.split("/").join([]);
  }, [loc]);

  useEffect(() => {
    AOS.init();
  }, []);

  const { userSignIn, googleLogin, githubLogin } = useContext(AuthContext);

  const handelForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userSignIn(email, password)
      .then(() => {
        console.log("result.user");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handelGoogleLonIn = () => {
    googleLogin().then(() => {
      console.log("sucess");
    });
  };

  const handelGithubLogIn = () => {
    githubLogin().then(() => {
      console.log("Github Sucess");
    });
  };
  return (
    <div className="w-2/4 mx-auto card-body border-2 rounded-xl shadow-xl mt-12">
      <div className="mt-8 ">
        <p
          data-aos="zoom-out-up"
          className="font-extrabold font-popi text-4xl text-center "
        >
          LogIn
        </p>
      </div>
      <form data-aos="zoom-in-left" onSubmit={handelForm} className="">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="flex gap-12 mt-4 mx-auto">
        <div onClick={handelGoogleLonIn} className="text-4xl cursor-pointer">
          <FcGoogle />
        </div>
        <div onClick={handelGithubLogIn} className="text-4xl cursor-pointer">
          <FaGithub />
        </div>
        <div className="text-4xl cursor-pointer">
          <BsTwitterX />
        </div>
      </div>
      <div className="mt-3">
        <p className="font-popi text-bold text-center ">
          Don not you have an account ?{" "}
          <Link className="text-blue-600" to="/register">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
