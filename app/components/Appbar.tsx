'use client'

import React, { useState } from 'react'
import Button from './utils/Button'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import clsx from 'clsx';
import { HiMenuAlt1 } from 'react-icons/hi'
import { IoCloseSharp } from 'react-icons/io5'
import { BiLogOut } from 'react-icons/bi'
import { SafeUser } from '../lib/types'
import SideTabs from './utils/SideTabs'

type Props = {
  CurrentUser : SafeUser | null
}

const Appbar = ({CurrentUser}: Props) => {
 

  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <motion.div initial={{ x: -40, opacity: 0}} animate={{ x: 0, opacity: 1}} transition={{ duration: 0.7}} 
        className='fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800'>
          <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
          <Link
            href="/"
            className="group flex w-full items-center gap-x-2.5"
            onClick={close}
          >
            <div className="h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50">
              {/* <NextLogo /> */}
            </div>

            <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
              App Router
            </h3>
          </Link>
        </div>
      <motion.button layout
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <IoCloseSharp  size={20} className="block w-6 text-gray-200" />
        ) : (
          <HiMenuAlt1 size={20} className="block w-6 text-gray-200" />
        )}
      </motion.button>
      
        <div 
          className={clsx('overflow-y-auto lg:static lg:block', {
            'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
            hidden: !isOpen,
          })}
        >
            <SideTabs User={CurrentUser} />
        </div>
     
      
    </motion.div>
  )
}

export default Appbar