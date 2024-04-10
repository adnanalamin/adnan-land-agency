import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-3xl">{user.email}</h2>
    </div>
  );
};

export default UpdateProfile;
