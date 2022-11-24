import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import MessageParser from './MessageParser';
import config from './config';
import ActionProvider from './ActionProvider';
import './Style.css';
import Button from '../common/Button';

const Container = tw.div`fixed bottom-24 right-4 w-11/12`;

const ChatBotButton = tw.button``;

const ChatBot = () => {
  const [showBot, setBot] = useState(false);

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
      <Button className={'w-16 h-16 bg-rose-400 shadow-xl fixed bottom-6 right-4 rounded-full'}
              onClick={handleBot}></Button>
    </Container>
  );
};

export default ChatBot;
