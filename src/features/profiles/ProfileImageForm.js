import { useRef, useState } from "react";
import Avatar from "../../component/Ui/Avatar";
import { useAuth } from "../../context/authContext";
import { useLoading } from '../../context/loadingContext'
import { toast } from "react-toastify";


function ProfileImageForm({ onCloseProfile }){
    
    const { user : {profileImage} , updateUser } = useAuth();
    
    const { startLoading , stopLoading } = useLoading()

    const [file , setFile ] = useState(null)

    // if(file)console.log(URL.createObjectURL(file));

    const inputE1 = useRef();

    const handleClickSave = async () => {
      try {
        startLoading();
        const formData = new FormData();
        formData.append('profileImage', file);
        await updateUser(formData);
        onCloseProfile();
        setFile(null);
        toast.success('success upload')
      }catch(err){
        console.log(err);
        toast.error(err.response?.data.message);
      }finally{
        stopLoading();
      }
    }

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
                    <button 
                      className="btn btn-link text-decoration-none hover-bg-gray-100"
                      onClick={handleClickSave}>
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
       
        </>
    )
}
export default ProfileImageForm;