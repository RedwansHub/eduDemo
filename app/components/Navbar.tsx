'use client'

import React from 'react'
import AuthButton from './utils/AuthButton'
import { motion } from 'framer-motion'
import useLoginModal from '../hooks/useLoginModal'
type Props = {}

const Navbar = (props: Props) => {

  const loginModal = useLoginModal()

    const handleAuth = () => {
      loginModal.onOpen();  
    }
  return (
    <motion.div initial={{ y:-30, opacity: 0}} animate={{ y:0, opacity: 1}} transition={{duration: 0.7}} 
      className='w-full fixed top-3 left-0 lg:px-24 md:px-12'>
      <div className='flex items-center justify-between rounded-lg  bg-black text-white  py-4 md:px-10 px-7'>
        <a href='/' className='font-bold text-xl uppercase hover:text-green-500 duration-300 ease-in-out'>
            Edu Plt4m
        </a>        
        <div className='flex gap-12 items-center'>
            <a href='/Docs' className='font-medium border-b-2 border-b-black py-1 hover:border-b-green-400'>
                Documentation
            </a>
            <AuthButton title='Login' onClick={() => handleAuth()} />
        </div>
       </div>
    </motion.div>
  )
}

export default Navbar