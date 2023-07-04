'use client'
import React from 'react'

import TaskTable from './TaskTable';

type Props = {}

const Tasks = (props: Props) => {

    
  return (
    <div>
        <div className='flex justify-between py-2'>
            <h2 className='text-xl font-semibold'>Tasks</h2>
            <h2 className='text-xs font-medium'>View All</h2>
        </div>
        <TaskTable />
        
    </div>
  )
}

export default Tasks