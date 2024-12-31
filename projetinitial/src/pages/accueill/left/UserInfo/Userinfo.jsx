import React from 'react'
import"./userInfo.css"
import avatar from './avatar.png';
import more from './more.png';
import video from './video.png';
import edit from './edit.png';

export const Userinfo = () => {
  return (
    <div className='userinfo'>
        <div className='user'>
           <img src={avatar} alt=''/>
           <h2>mostafa gaied</h2>
           <p>5★</p>
        </div>
        <div className='icons'>
        <img src={more} alt=''/>
        <img src={video} alt=''/>
        <img src={edit} alt=''/>
        </div>
    </div>
  )
}
export default Userinfo