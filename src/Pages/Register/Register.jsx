import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import Swal from "sweetalert2";

const Register = () => {
  const loc = useLocation();
  const [showPassword, setShowPassword] = useState(false)
  
  useEffect(() => {
    document.title = loc.pathname.split("/").join([]);
  }, [loc]);

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.email);
    const { email, password, name, photo } = data;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(name,photo)
        .then(() => {
          Swal.fire({
            title: "Good job!",
            text: "Registration successfully!",
            icon: "success"
          });
        })
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: {error}
        });
      });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-2/4 mx-auto">
      <div className="mt-8">
        <p
          data-aos="zoom-out-up"
          className="font-extrabold font-popi text-4xl text-center "
        >
          Register
        </p>
      </div>
      <form
        data-aos="zoom-in-left"
        onSubmit={handleSubmit(onSubmit)}
        className="card-body border-2 rounded-xl shadow-xl mt-12"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            {...register("email", {
              required: true,
              pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
            })}
          />
          {errors.email && <span>sssss</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            name="photo"
            className="input input-bordered"
            {...register("photo", { required: true })}
          />
          {errors.photo && <span>sssss</span>}
        </div>
        <div className="form-control">
          <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
             
          </label>
          <input
            type={showPassword ? "text":"password"}
            placeholder="password"
            className="input input-bordered"
            {...register("password", {
              required: true,
              pattern: /(?=.*[A-Z])(?=.*[a-z]).{6,}/,
            })}
          />
          <span className="absolute bottom-4 right-2" onClick={() => setShowPassword(!showPassword)}>
            {
                showPassword ?  <IoIosEyeOff></IoIosEyeOff> : <IoIosEye></IoIosEye>
            }
          </span>
          {errors.password && <span>This field is required</span>}
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div className="mt-3">
        <p className="font-popi text-bold text-center ">
          Already have account ?
          <Link className="text-blue-600" to="/login">
            Login
          </Link>
        </p>
      </div>
      </form>
      
    </div>
  );
};

export default Register;
