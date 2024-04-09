import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation } from 'react-router-dom';



const Register = () => {

  const loc= useLocation();
    
    console.log(loc)
    useEffect(() => {
        document.title = loc.pathname.split('/').join([]);
      }, [loc]);

  const {createUser} = useContext(AuthContext)
 

  const {register,handleSubmit,formState: { errors }} = useForm()

  const onSubmit = (data) => {
    console.log(data.email)
    const {email,password} = data;
    createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error.message)
        })
    
    
  }

  useEffect(()=>{
    AOS.init();
},[])



   
    return (
        <div className="w-2/4 mx-auto">
          <div  className="mt-8">
            <p data-aos="zoom-out-up" className="font-extrabold font-popi text-4xl text-center ">Register</p>
          </div>
            <form data-aos="zoom-in-left" onSubmit={handleSubmit(onSubmit)} className="card-body border-2 rounded-xl shadow-xl mt-12">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input  type="text" placeholder="Name" name="name" className="input input-bordered"
          {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered"
          {...register("email", { required: true, pattern:/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/ })} />
          {errors.email && <span>sssss</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" 
          {...register("photo", { required: true,  })} />
          {errors.photo && <span>sssss</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"
          {...register("password", { required: true, pattern:/(?=.*[A-Z])(?=.*[a-z]).{6,}/
        })}  />
          {errors.password && <span>This field is required</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
        </div>
    );
};

export default Register;