'use client'

import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { MdOutlineTask, MdDelete } from 'react-icons/md'
import { FaBookOpen } from 'react-icons/fa'
import { GiBlackBook } from 'react-icons/gi'
import { AiFillEdit } from 'react-icons/ai'

type Props = {}

const TaskTable = (props: Props) => {

    const notifyDel = (name: string) => toast('Deleting User.' , {icon: '👏'});
    const notifyEdit = (name: string) => toast(`Editing User. - ${name}` );
    const taskList = [
        {id: 1, title: 'Task 01', icons: <MdOutlineTask size={20}/>, 
            deadline: '12 Dec 23', status: 'Not Submitted', action: ''},
        {id: 2, title: 'Task 02', icons: <FaBookOpen size={20}/>, 
            deadline: '13 Dec 23', status: 'Submitted', action: ''},
        {id: 3, title: 'Task 03', icons: <GiBlackBook size={20}/>,

            deadline: '14 Dec 23', status: 'Not Submitted', action: ''},
        {id: 4, title: 'Task 04', icons: <GiBlackBook size={20}/>,

            deadline: '15 Dec 23', status: 'Not Submitted', action: ''},
        {id: 5, title: 'Task 05', icons: <GiBlackBook size={20}/>, 
            deadline: '16 Dec 23', status: 'Re-check', action: ''},
    ]
    const [selectedUser, setSelectedUser] = useState(0)
    

  return (
    <div className='border px-3 py-2 rounded-md    border-[#07E073] bg-[#222222]'>
            <table className='w-full  '>
                <thead className=' '>
                    <tr className=''>
                        <td className='py-2 px-6 text-sm font-medium whitespace-nowrap text-gray-400'></td>
                        <td className='py-2 px-6 text-sm font-medium whitespace-nowrap text-gray-400'>Task Title</td>
                        <td className='py-2 px-6 text-sm font-medium whitespace-nowrap text-gray-400'>Deadline</td>
                        <td className='py-2 px-6 text-sm font-medium whitespace-nowrap text-gray-400'>Status</td>
                        <td className='py-2 px-6 text-sm font-medium whitespace-nowrap text-gray-400'>Action</td>
                    </tr>
                </thead>
                <tbody className=''>
                    {taskList.map( task => (
                        <tr key={task.id} className='rounded-md border border-[#07E073] p-2 cursor-pointer items-center  hover:bg-gray-100 dark:hover:bg-gray-700'>
                            <td className='py-2 px-6 text-sm font-medium  text-white '>{task.icons} </td>
                            <td className='py-2 px-6 text-sm font-medium  text-white '>{task.title}</td>
                            <td className='py-2 px-6 text-sm font-medium  text-white'>{task.deadline}</td>
                            <td className='py-2 px-4 text-xs  font-medium  text-black'>
                                    <div className='bg-yellow-400  rounded-md py-2 text-center '>
                                        {task.status}

                                    </div>
                            </td>
                            <td className='py-2 px-2 text-sm font-medium flex justify-center items-center  text-white'>
                                <div className='' onClick={() => notifyDel(task.title)}>
                                <MdDelete size={20} className='hover:scale-105 duration-200 ease-in-out'/>
                                </div>
                                <div className='' onClick={() => notifyEdit(task.title)}>
                                <AiFillEdit size={20} className='hover:scale-105 duration-200 ease-in-out'/>
                                </div>
                                <Toaster />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default TaskTable