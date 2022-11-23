import React from 'react';
import './BotAvatar.css';
import botavatar from '../../../../../assets/Images/bot.png';

function BotAvatar() {
  return <img src={botavatar} className='my-avatar' alt='botavatar' />;
}

export default BotAvatar;
