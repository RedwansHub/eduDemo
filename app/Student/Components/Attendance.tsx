import React from 'react'

type Props = {}

const Attendance = (props: Props) => {
    const containers = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div>
        <div className='flex justify-between items-center py-1'>
            <h2 className='text-xl font-semibold'>Attendance</h2>
            <h2 className='text-xs font-medium text-green-500 cursor-pointer'>View All</h2>
        </div>
        <div className='grid gap-2 px-4 py-4 bg-[#242424] rounded-md'>
            {containers.map((container, idx) => (
            <div key={idx} className='w-full rounded-md p-2 py-4 px-4 items-center border border-green-500/20 flex justify-between shadow-md bg-[#1A1A1A] '>
                <div className='flex justify-between items-center gap-4'>
                    <h1 className='text-xs font-medium'>Chemistry</h1>
                    <div className={`bg-green-500 w-36 rounded-sm h-2`}/>
                </div>
                    <h1 className='text-xs font-normal text-green-500'>80%</h1>
                    
            </div>
            ))}
        </div>
    </div>
  )
}

export default Attendance