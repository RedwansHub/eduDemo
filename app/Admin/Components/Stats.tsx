'use client'

import React, { useState } from 'react'
import UserTable from './UserTable'
import StudentsTable from './StudentsTable'
import CoursesTable from './CoursesTable'

type Props = {}

const Stats = (props: Props) => {

    const items = [
        {id: 1, name:'Users', table: <UserTable />},
        {id: 2, name:'Students', table: <StudentsTable />},
        {id: 3, name:'Courses', table: <CoursesTable />},
    ]
    const [selectedItem, setSelectedItem] = useState(1)
    const toggleItem = (id: number) => {
        setSelectedItem(id)
    }

  return (
    <div className='w-[70%] p-2 '>
        <div className='flex  gap-4 w-full'>
            {items.map((item) => (
                <div key={item.id} onClick={() => toggleItem(item.id)} 
                    className={`cursor-pointer border rounded-md px-8 py-2 font-semibold 
                    hover:bg-green-500 hover:text-black duration-200 ease-in-out` }>
                    {item.name}
                </div>
            ))}
        </div>
            
        <div className="py-12">
            {items.filter((val)=> val.id === selectedItem).map(item => (
                <div key={item.id}>{item.table}</div>
            ))
            }
          {/* <UserTable /> */}
        </div>
    </div>
  )
}

export default Stats