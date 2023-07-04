'use client'

import React, { useState } from 'react'
import Options from './Options'

type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    status: string;
  };
  
  type Props = {
    users: User[];
  };

const Table = ({users}: Props) => {

 
    const [selectedUser, setSelectedUser] = useState('');
    const select = (id: string) => {
        setSelectedUser(id)
    }
  return (
    <div className='py-2 '>
        <table className='w-full ' >
            <tbody className='w-full'>
                <tr className='px-2 pl-8 text-left text-sm'>
                <th className='px-2 text-sm text-gray-400 py-1'>Id</th>
                <th className='px-2 text-sm text-gray-400 py-1'>Name</th>
                <th className='px-2 pl-8 text-sm text-gray-400 py-1'>Email</th>
                <th className='px-2 text-sm text-gray-400 py-1'>Phone</th>
                <th className='px-2 text-sm text-gray-400 py-1'>Status</th>
                </tr>
                {users?.map((user, idx) => (
                <tr key={user.id} 
                    className={(user.name === selectedUser) ? 'py-2 bg-red-500 border-2 rounded-md' : 'py-4  px-2 text-left border-2 rounded-md  font-medium'} 
                    onClick={() => select(user.name)}>
                        <td className='px-2   py-1'>{idx+1}</td>
                        <td className='px-2   py-1'>{user.name}</td>
                        <td className='px-2 pl-8   py-1'>{user.email}</td>
                        <td className='px-2   py-1'>+00 000 00</td>
                        <td className='px-2   py-1'>status</td>
                        <td><Options  /></td>
                        
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table