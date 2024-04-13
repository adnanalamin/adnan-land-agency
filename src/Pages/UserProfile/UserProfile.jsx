import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <p>{user.displayName}</p>
        </div>
    );
};

export default UserProfile;