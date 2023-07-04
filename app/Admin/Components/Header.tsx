'use client'

import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import UserTable from './UserTable'

type Props = {}

const Header = (props: Props) => {
  
  const { data: session } = useSession();

  return (
    <div className='w-full p-4 border rounded-md'>
        <h2>Admin Dashboard</h2>
        <div className='flex gap-2'>
          <h2 className='text-lg hover:text-green-500 cursor-pointer font-semibold'>Dashboard</h2>
          <h2 className='text-lg hover:text-green-500 cursor-pointer font-semibold'>Manage Users</h2>
        </div>
        <div>
          <UserTable />
        </div>
    </div>
  )
}

export default Header