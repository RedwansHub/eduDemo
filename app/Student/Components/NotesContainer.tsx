import React from 'react'

type Props = {}

const NotesContainer = (props: Props) => {
    const containers = Array.from({ length: 3 }, (_, index) => index + 1);
  return (
    <div className=''>
        <div className='flex justify-between items-center py-1'>
            <h2 className='text-xl font-semibold'>Notes</h2>
            <h2 className='text-xs font-medium text-green-500 cursor-pointer'>View All</h2>
        </div>
        <div className='grid gap-2 px-4 py-4 bg-[#242424] rounded-md'>
            {containers.map((container, idx) => (
            <div key={idx} className='w-full rounded-md p-2 px-4 items-center border border-green-500/20  shadow-md bg-[#1A1A1A] '>
                <div className='flex justify-between items-center '>
                    <h1 className='text-xs font-bold text-green-500'>Chemistry Notes</h1>
                    <h1 className='text-[8px] font-semibold text-green-500'>10:00</h1>
                </div>
                <div className='flex items-center '>
                    <h1 className='text-sm'>Jsut sme Nots</h1>
                </div>
                    
            </div>
            ))}
        </div>
    </div>
  )
}

export default NotesContainer