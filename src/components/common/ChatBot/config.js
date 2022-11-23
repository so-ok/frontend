// Config starter code
import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';
import BotAvatar from './widgets/BotAvatar/BotAvatar';
import UserAvatar from './widgets/UserAvatar/UserAvatar';
import Menu from './widgets/Menu/Menu.jsx';
import Attentions from './widgets/Additionals/Attentions';
import ViewOrder from './widgets/OrderDetails/ViewOrder';
import Options from './widgets/Options/Options';

const config = {
  botName: 'sook_Kiyoung',
  initialMessages: [
    createChatBotMessage('영양제 선택에 도움이 필요하신가요?', {
      withAvatar: true,
      delay: 2000,
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
      <div
        style={{
          backgroundColor: '#D1F5F9',
          padding: '5px',
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
          display: 'center',
          fontSize: '0.85rem',
          paddingTop: '12.5px',
          paddingBottom: '12.5px',
          paddingRight: '12.5px',
          paddingLeft: '12.5px',
          fontWeight: '700',
          alignItems: 'center',
        }}
      >
        영양쏘옥_기영이와 함께하는
      </div>
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
      widgetFunc: (props) => <Attentions {...props} />,
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
