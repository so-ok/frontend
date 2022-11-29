import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import MessageParser from './MessageParser';
import config from './config';
import ActionProvider from './ActionProvider';
import './Style.css';
import Button from '../common/Button';
import Dimmed from '../common/Dimmed';
import { Pill } from '../common/SvgImport';

const Container = tw.div``;

const ChatBot = () => {
  const [showBot, setBot] = useState(false);

  const handleBot = () => {
    setBot(!showBot);
  };

  return (
    <Container>
      {showBot && (
        <Dimmed>
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </Dimmed>
      )}
      <Button
        className={
          'w-16 h-16 bg-rose-400 shadow-md fixed bottom-6 right-4 rounded-full'
        }
        onClick={handleBot}
      >
        <Pill color={'white'}></Pill>
      </Button>
    </Container>
  );
};

export default ChatBot;
