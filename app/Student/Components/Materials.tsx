import React from 'react'

type Props = {}

const Materials = (props: Props) => {
    const containers = Array.from({ length: 4 }, (_, index) => index + 1);

    return (
    <div className=''>
        <div className='flex justify-between items-center py-1'>
            <h2 className='text-xl font-semibold'>Materials</h2>
            <h2 className='text-xs font-medium text-green-500 cursor-pointer'>View All</h2>
        </div>
        <div className='flex gap-2 '>
            {containers.map((container, idx) => (
            <div key={idx} className='w-full rounded-md h-24 px-2 border'>
                {container}
            </div>
        ))}
        </div>
    </div>
  )
}

export default Materials