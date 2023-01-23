import Avatar from "../../component/Ui/Avatar";
import { useAuth } from "../../context/authContext";

function DropdownToggle({ onClick }){

    const { user: {profileImage} } = useAuth();

    return (
        <div onClick={onClick}>
            <Avatar 
                src={profileImage}
                size="40"
              />

        </div>
    )
}
export default DropdownToggle;