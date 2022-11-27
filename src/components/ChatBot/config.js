import React from 'react';
import tw from 'tailwind-styled-components';

import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './widgets/BotAvatar/BotAvatar';
import UserAvatar from './widgets/UserAvatar/UserAvatar';
import Menu from './widgets/Menu/Menu.jsx';
import ViewOrder from './widgets/OrderDetails/ViewOrder';
import Options from './widgets/Options/Options';
import Attention from './widgets/Additionals/Attention';

const BotHeader = tw.div`flex justify-center items-center bg-rose-400 text-white font-bold rounded-t-xl shadow-md h-10`;

const config = {
  botName: 'sook_Kiyoung',
  initialMessages: [
    createChatBotMessage('영양제 선택에 도움이 필요하신가요?', {
      withAvatar: true,
      delay: 500,
      widget: 'options',
    }),
  ],

  customStyles: {
    botMessageBox: {
      backgroundColor: '#FB7185',
    },
    chatButton: {
      backgroundColor: '#F1F5F9',
    },
  },
  customComponents: {
    header: () => (
      <BotHeader>영양쏘옥</BotHeader>
    ),
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },

  state: {
    orderedItems: [],
    selectedAttentions: '',
    preferredSpiceLevel: '',
    userName: '',
    userPhone: '',
    preferredMode: '',
    userLocation: '',
  },
  widgets: [
    {
      widgetName: 'options',
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: 'attentions',
      widgetFunc: (props) => <Attention {...props} />,
      mapStateToProps: ['selectedAttentions'],
    },
    {
      widgetName: 'menu',
      widgetFunc: (props) => <Menu {...props} />,
      mapStateToProps: ['orderedItems'],
    },
    {
      widgetName: 'view',
      widgetFunc: (props) => <ViewOrder {...props} />,
      mapStateToProps: [
        'orderedItems',
        'selectedToppings',
        'preferredSpiceLevel',
        'userPhone',
        'userName',
        'preferredMode',
        'userLocation',
      ],
    },
  ],
};

export default config;
