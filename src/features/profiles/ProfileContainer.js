import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoading } from "../../context/loadingContext";
import ProfileCover from "./ProfileCover";
import ProfileInfo from "./ProfileInfo";
import * as userService from '../../api/userApi'
import { toast } from "react-toastify";
import { FRIEND_STATUS_ME } from "../../config/constants";
import { useAuth } from "../../context/authContext";


function ProfileContainer(){
    
    const { id } = useParams();
    
    const { user: me } = useAuth()


    const [user , setUser ] = useState({});
    const [friend , setFriend ] = useState({});
    const [statusWithMe , setStatusWithMe ] = useState('');

    const { startLoading , stopLoading } = useLoading();

    useEffect(()=>{
        const fetchUserFriends = async() => {
            try{
                startLoading();
                const res = await userService.getUserFriends(id);
                setUser(res.data.user);
                setFriend(res.data.friends);
                setStatusWithMe(res.data.statusWithMe);
                console.log(res.data.statusWithMe)
            }catch(err){
                console.log(err);
                toast.error(err.response?.data.message)
            }finally{
                stopLoading();
                
            }
        };
        fetchUserFriends();
    },[id , me]);
    
    return(
        <div  className="shadow-sm pb-2"       
            style={{ backgroundImage: 'linear-gradient(#f0f2f5, #fff)' }}
        >
        <ProfileCover coverImage={user.coverImage}/>
        <ProfileInfo isMe={statusWithMe === FRIEND_STATUS_ME} 
                    user={user}  
                    friend={friend}  
        />
      </div>
        
    )
    
}

export default ProfileContainer;