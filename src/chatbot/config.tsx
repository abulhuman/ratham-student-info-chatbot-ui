import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from '../components/Avatar';
import { JSX } from 'react/jsx-runtime';

import IConfig from 'react-chatbot-kit/build/src/interfaces/IConfig';
import { ButtonWidget } from '../components/ButtonWidget';
import { DateWidget } from '../components/DateWidget';
import { AgeWidget } from '../components/AgeWidget';

const config: IConfig = {
  botName: 'Student Info System',
  initialMessages: [
    createChatBotMessage('Hello, Welcome to student info system!', {
      widget: 'gotIt'
    })
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#F4F4F4'
    },
    chatButton: {
      backgroundColor: '#5ccc9d'
    }
  },
  customComponents: {
    header: () => <></>,
    botAvatar: (props: JSX.IntrinsicAttributes) => (
      <Avatar src={'/src/assets/avatar.png'} {...props} />
    ),
    botChatMessage: (props: JSX.IntrinsicAttributes & { message: string }) => (
      <div
        {...props}
        className='bg-[#F4F4F4] px-3 py-4 rounded-xl rounded-tl-sm'
      >
        <span>{props.message}</span>
      </div>
    ),
    userChatMessage: (props: JSX.IntrinsicAttributes & { message: string }) => (
      <div
        {...props}
        className='bg-[#5ccc9dc9] px-3 py-4 rounded-xl rounded-br-sm'
      >
        <span>{props.message}</span>
      </div>
    )
  },
  widgets: [
    ButtonWidget,
    DateWidget,
    AgeWidget
  ]
};

export default config;

