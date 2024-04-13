import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <p>{user.displayName}</p>
            <img src={user.photoURL} alt="ffff" />
        </div>
    );
};

export default UserProfile;