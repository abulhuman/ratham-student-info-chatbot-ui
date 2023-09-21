import React, { Dispatch, SetStateAction } from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { useNavigate } from 'react-router-dom';

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createChatBotMessage: any;
  setState: Dispatch<SetStateAction<unknown>>;
  children: JSX.Element;
}) => {
  const navigate = useNavigate();
  // const [countDown, setCountDown] = React.useState(5);

  const chatInputContainer = document.querySelector(
    '.react-chatbot-kit-chat-input-container'
  ) as HTMLElement;

  const handleGotIt = () => {
    chatInputContainer.style.visibility = 'hidden';
    const userMessage = createClientMessage('Got it!', {});

    const botMessage = createChatBotMessage('Pick a slot !!', {
      widget: 'pickSlot'
    });

    setState((prev: { messages: string }) => ({
      ...prev,
      messages: [...prev.messages, userMessage, botMessage]
    }));
  };

  const handlePickSlot = ({date, time}: { date: string; time: string }) => {
    const userMessage = createClientMessage(`${date} ${time}`, {});

    const botMessage = createChatBotMessage('Enter your name');
    
    chatInputContainer.style.visibility = 'visible';

    setState((prev: { messages: string }) => ({
      ...prev,
      messages: [...prev.messages, userMessage, botMessage]
    }));
  };

  const handleAge = () => {
    chatInputContainer.style.visibility = 'hidden';
    const botMessage = createChatBotMessage('Enter your age', {
      widget: 'selectAge'
    });

    setState((prev: { messages: string }) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }));
  };

  const handleLast = (age: number) => {
    const userMessage = createClientMessage(age.toString(), {});

    let countDown = 5;

    const botMessage = createChatBotMessage(
      `Thank you. In ${countDown} seconds, bot will exit`,
      {
        withAvatar: false
      }
    );

    
    const interval = setInterval(() => {
      if (countDown === 0) {
        clearInterval(interval);
        
        navigate('/thank-you');
      } else {
        countDown--;
        botMessage.message = `Thank you. In ${countDown} seconds, bot will exit`;
        setState((prev: { messages: string; }) => {          
          const messages = countDown === 4 ? [...prev.messages, userMessage, botMessage] : [...prev.messages];
          return {
            ...prev,
            messages
          };
        });
      }
    }, 1000);
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleGotIt, handlePickSlot, handleAge, handleLast }
        });
      })}
    </>
  );
};

export default ActionProvider;

