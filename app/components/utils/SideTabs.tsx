'use client' 
import React, { useState } from 'react'
import { IconType } from 'react-icons';
import { TbLogout } from 'react-icons/tb'
import Link from 'next/link'
import { MenuBar }  from '../../lib/data'
import clsx from 'clsx';
import { signOut } from 'next-auth/react';
import { SafeUser } from '../../lib/types';
import SideItem from './SideItem';
import { useRouter } from 'next/navigation';

type Props = {
  User: SafeUser | null;
}

const SideTabs = (props: Props) => {
 
    const [sel, setSel] = useState(1)
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    const MenuData = MenuBar
    const [selected, setSelected] = useState(true)
    
    console.log('Curent  user - ', props.User?.name);
 
    const router = useRouter()
  
    const handleLogout = () => {
      setSelected(!selected)
      signOut();
      router.push('/')
    }
  return (
    <nav className='space-y-2 px-2 py-5'>
        
        {MenuData.map( tab => (
            <div  key={tab.id}  onClick={() => setSel(tab.id)}
                className={ ` flex items-center  px-2 py-1 cursor-pointer`
                }>       
                    <SideItem key={tab.id} Tab={tab} slct={sel} close={close}/>      
            </div>
        ))}
        <div className='absolute bottom-10 pr-6 pl-2 w-full'>
            <div 
              className={clsx(
              'rounded-md px-4 w-full cursor-pointer  text-sm font-semibold flex justify-between items-center gap-4 border-2  hover:bg-gray-800 hover:text-gray-300',
                  )}>
              <h2 className='py-4'>{props.User?.name || 'Logout'}</h2>
                <div className='border border-black p-2 rounded-xl hover:bg-green-500 cursor-pointer'  onClick={() => handleLogout()} >
                    <TbLogout size={20}/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default SideTabs