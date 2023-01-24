import { useRef, useState } from "react";
import Avatar from "../../component/Ui/Avatar";
import { useAuth } from "../../context/authContext";
import CoverImageForm from "./CoverImageForm";

function ProfileImageForm(){
    
    const { user : {profileImage} } = useAuth();
    
    const [file , setFile ] = useState(null)

    // if(file)console.log(URL.createObjectURL(file));

    const inputE1 = useRef();

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Profile Picture</h5>
              <input type="file" 
                     className="d-none" 
                     ref={inputE1} 
                     onChange={e => {
                        if(e.target.files[0]){
                            setFile(e.target.files[0]);
        
                        }
                    }
                    }/>
              <div>
                {file && (
                <>
                    <button className="btn btn-link text-decoration-none hover-bg-gray-100">
                      Save
                    </button>
                    <button className="btn btn-link text-decoration-none hover-bg-gray-100"
                            onClick={() => {
                                setFile(null);
                                inputE1.current.value = null
                            }}>
                      Cancel
                    </button>
                </>
                )}
                <button className="btn btn-link text-decoration-none hover-bg-gray-100"
                        onClick={()=> inputE1.current.click()}
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="text-center mt-3">
                <span onClick={()=> inputE1.current.click()}   >
                    <Avatar src={file ? URL.createObjectURL(file) : profileImage} size="168"/>
                </span>
            </div>
            <CoverImageForm />
        </>
    )
}
export default ProfileImageForm;