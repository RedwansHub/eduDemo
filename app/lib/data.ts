import { IconType } from 'react-icons';
import { AiFillCalendar } from 'react-icons/ai';
import { BsFillChatLeftTextFill, BsFillInboxFill } from 'react-icons/bs';
import { RxDashboard } from 'react-icons/rx';
import { SiGoogleclassroom } from 'react-icons/si';

export type MenuItemProps = {
    id: number;
    name: string; 
    path: string ; 
    icon?: IconType;
  };
  
  export const MenuBar:  MenuItemProps[]  = [
    {
      id: 1,
      name: 'Dashboard',
      path: '/',
      icon: RxDashboard,
    },
    {
      id: 2,
      name: 'Inbox',
      path: '/mail',
      icon: BsFillInboxFill,
    },
    {
      id: 3,
      name: 'Schedule',
      path: '/schedule',
      icon: AiFillCalendar,
    },
    {
      id: 4,
      name: 'Classroom',
      path: '/classroom',
      icon: SiGoogleclassroom,
    },
    {
      id: 5,
      name: 'Chat',
      path: '/chat',
      icon: BsFillChatLeftTextFill,
    },
  ];