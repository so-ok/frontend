import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import MessageParser from './MessageParser';
import config from './config';
import ActionProvider from './ActionProvider';
import './Style.css';

const Container = tw.div``;

const ChatBot = () => {
  const [showBot, setBot] = useState(true);

  const handleBot = () => {
    const botState = !showBot;
    setBot(botState);
  };

  return (
    <Container>
      {showBot && (
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      )}
      <button className='app-chatbot-button' onClick={handleBot}>
      </button>
    </Container>
  );
};

export default ChatBot;
