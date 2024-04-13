import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="mt-16 border w-2/5 mx-auto text-center shadow-[#5F8A85] p-9 rounded-2xl shadow-2xl">
            
            <div className="avatar">
            <div className="w-64 rounded-full">
            <img className="" src={user.photoURL} alt="ffff" />
            </div>
            </div>
            <p className="font popi text-4xl text-[#323E3D] font-extrabold mt-5">{user.displayName}</p>
            <p className="font popi text-2xl text-[#323E3D] font-extrabold mt-5">{user.email}</p>
            
        </div>
    );
};

export default UserProfile;