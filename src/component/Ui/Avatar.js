import profileImg from '../../asset/images/profileImg.png'

function Avatar({ src ,size  }){
    return (
        <img
        src={src || profileImg}
        className="rounded-circle cursor-pointer"
        width={size}
        height={size}
        alt="user"
      />
    )
}

export default Avatar;