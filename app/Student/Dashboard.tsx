import React from 'react'
import Tasks from './Components/Task/Tasks'
import Materials from './Components/Materials'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className=''>
        <h2 className='text-2xl font-bold'>Dashboard</h2>
        <div className='flex  py-4 gap-4  '>
          <div className='border-2 rounded-md w-[70%]  p-4 grid gap-2 text-black border-[#07E073] '>
              <div className='bg-[#07E073] h-12 p-2'>Recent Activity</div>
              <div className='grid grid-cols-2 gap-2'>
                <div className='p-2 border border-[#07E073]  text-white'><Materials /></div>
                <div className='p-4 border border-[#07E073] h-12 text-white'>Materials</div>
              </div>
              
          </div>
          <div className='border-2 rounded-md w-[30%] h-70 p-4 border-[#07E073] '>
              Today's Schedule
          </div>

        </div>

        <div className='flex gap-4 '>
          <div className=' w-[65%] p-2 '>
              <Tasks />
              
          </div>
          <div className='border-2 w-[35%]  rounded-md p-4 border-[#07E073] '>
              Today's Schedule
          </div>

        </div>
        <div></div>
    </div>
  )
}

export default Dashboard