import { useState } from 'react';
import Modal from '../../component/Ui/Modal'
import CoverImageForm from './CoverImageForm';
import ProfileImageForm from './ProfileImageForm';

function ProfileEdit(){

    const [isOpen , setIsOpen] = useState(false);

    return (
        <>
        <button className="btn btn-gray-200" onClick={() => setIsOpen(true)}>
            <i className="fa-solid fa-pen" /> Edit Profile
        </button>
        <Modal 
            title='Edit profile' 
            open={isOpen}
            onClose={()=> setIsOpen(false)}>
                <ProfileImageForm onCloseProfile={()=> setIsOpen(false)}/>
                <CoverImageForm onCloseCover={()=> setIsOpen(false)}/>
            </Modal>
        </>
    )
}

export default ProfileEdit;