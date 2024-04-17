import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const [photo, setphoto] = useState(user.photoURL);

  const location = useLocation()
    useEffect(() => {
        document.title = location.pathname.split("/").join([]);
      }, [location]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUserProfile(name, photo)
      .then(() => {
        setName(name);
        setphoto(photo);
        Swal.fire({
          title: "Good job!",
          text: "Your profile update successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: { error },
        });
      });
  };

  return (
    <div className="w-2/5  mx-auto mt-12 border-2 p-6 rounded-lg shadow-2xl">
      <form onSubmit={handleUpdateProfile} className="w-full">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            value={photo}
            className="input input-bordered"
            onChange={(e) => setphoto(e.target.value)}
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
