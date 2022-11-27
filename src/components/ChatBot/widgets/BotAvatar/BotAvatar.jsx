import React from 'react';
import tw from 'tailwind-styled-components';

import botAvatar from '../../../../assets/Images/bot.png';

const Bot = tw.img`w-10 h-10 rounded-md shadow-md`;

function BotAvatar() {
  return <Bot src={botAvatar} alt='bot avatar' />;
}

export default BotAvatar;
