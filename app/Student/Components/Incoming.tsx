import React from 'react'

type Props = {}

const Incoming = (props: Props) => {
    const containers = Array.from({ length: 3 }, (_, index) => index + 1);

    return (
    <div className=''>
        <div className='flex justify-between items-center pb-2'>
            <h2 className='text-xl font-semibold'>Incoming</h2>
            <h2 className='text-xs font-normal text-green-500 cursor-pointer'>View All</h2>
        </div>
        <div className='grid gap-2 '>
            {containers.map((container, idx) => (
            <div key={idx} className='w-full rounded-md p-2 px-4 items-center border border-green-500/20  shadow-md bg-green-950 flex justify-between'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-sm'>Data Structure</h1>
                    <h1 className='text-xs font-bold text-green-500'>10:00 - 12:00</h1>
                </div>
                    <h1 className='text-sm'>Online</h1>
                    <h1  className='text-xs font-bold text-green-500'>Zoom</h1>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Incoming