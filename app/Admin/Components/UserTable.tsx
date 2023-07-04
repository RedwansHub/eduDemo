'use client'

import React, { useState } from 'react'
import Table from './Table'
import Button from '../../components/utils/Button'
import SearchBar from './SearchBar'
import { motion } from 'framer-motion'
import useFormModal from '@/app/hooks/useFormModal'

type Props = {}

const UserTable = (props: Props) => {
  const users = [
    {id:1, name: 'Alex', email: 'Alex@exmpl.com', phone: '+00 000 000 00', status: 'Admin'},
    {id:2, name: 'Mark', email: 'Mark@exmpl.com', phone: '+00 000 000 00', status: 'Student'},
    {id:3, name: 'Yusuf', email: 'Yusuf@exmpl.com', phone: '+00 000 000 00', status: 'Teacher'},
    {id:4, name: 'Abdi', email: 'Abdi@exmpl.com', phone: '+00 000 000 00', status: 'Student'},
  ]
  const [searchValue, setSearchValue] = useState('');
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const FormModal = useFormModal()

  return (
    <motion.div initial={{y:80, opacity: 0}} animate={{y:0, opacity: 1}} transition={{ duration: 0.8}}
      className='border border-green-500 rounded-md  p-4'>
          <h2 className='font-semibold text-xl'>Users Table</h2>
        <div className='flex justify-between items-center pt-2'>
          <SearchBar value={searchValue} onChange={setSearchValue} />
          <Button label='Create User' onClick={FormModal.onOpen}  />
        </div>
        <div className='p-1'>
            <Table users={filteredUsers} />
        </div>
    </motion.div>
  )
}

export default UserTable