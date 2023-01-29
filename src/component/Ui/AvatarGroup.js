import { Link } from "react-router-dom";
import Avatar from "./Avatar";

function AvatarGroup({ 
                    data = [],
                    size = 16 , 
                    borderSize  , 
                    borderColor ,
                    maxAvartar = 8
                    }){
        
            console.log(data);
    return (
     
                <div>
                
                    {data.slice(0, maxAvartar).map((item ,index) => (
                        <Link key={item.id} to={`/profile/${item.id}`}>
                            <span className={index !== 0 ? '-ms-2' : ''} >
                                <Avatar 
                                    src={item.profileImage}  
                                    size={size} 
                                    borderSize={borderSize}  
                                    borderColor={borderColor} 
                                    />                       
                            </span>      
                        </Link>
                    ))}
                </div>
     
    );

};

export default AvatarGroup ;