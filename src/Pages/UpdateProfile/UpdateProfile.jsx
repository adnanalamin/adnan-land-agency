import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const [photo, setphoto] = useState(user.photoURL);
  const [isEditing, setIsEditing] = useState(false);
 
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    console.log(photo)
    
    updateUserProfile(name, photo)
      .then(() => {
        
        setName(name);
        setphoto(photo);
        setIsEditing(false);
        Swal.fire({
          title: "Good job!",
          text: "Your profile update successfully!",
          icon: "success"
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: {error}
        });
        
      });
  };
  
  return (
    <div className="w-2/5  mx-auto mt-12 border-2 p-6 rounded-lg shadow-2xl">
      {isEditing ? (
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
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      ) : (
        <div>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={user?.photoURL} alt="Profile" /> 
            </div>
          </div>
          <h2 className="text-3xl font-popi font-extrabold mt-5">{user.displayName}</h2>
          <h2 className="text-2xl font-popi font-bold mt-5">{user.email}</h2>
          
          <button className="btn w-full text-white bg-red-600 text-2xl font-popi font-bold mt-5" onClick={() => setIsEditing(true)}>Update Profile</button>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;
