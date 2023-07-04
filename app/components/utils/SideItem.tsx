'use client'

import { MenuItemProps } from '@/app/lib/data';
import React from 'react'
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import { IconType } from 'react-icons';

type MenuProps = {
    Tab: MenuItemProps
    slct: number
    close: () => false | void;
}

const SideItem = ({Tab, slct, close} : MenuProps) => {
    const segment = useSelectedLayoutSegment();
    const isActive = Tab.path === segment;
    
  return (
    <Link
        onClick={close}
        href={`/Student${Tab.path}`}
        className={clsx(
        'rounded-md px-8 w-full py-4 text-sm font-semibold flex items-center gap-4 border-2  hover:bg-gray-800 hover:text-gray-300',
            {
                'text-gray-800 bg-[#07E073]': slct == Tab.id,
                'text-gray-100':  !(slct == Tab.id),
            })}>
                {Tab.icon && <Tab.icon size={20} color={slct == Tab.id ? '#111' : '#07E073'}/>} 
        {Tab.name}
  </Link>
  )
}

export default SideItem