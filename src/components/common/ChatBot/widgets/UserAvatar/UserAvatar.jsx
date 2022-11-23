import React from 'react';
import './UserAvatar.css';
import image from '../../../../../assets/Images/avatar.png';

function UserAvatar() {
  return <img src={image} className='user-avatar' alt='avatar' />;
}

export default UserAvatar;
