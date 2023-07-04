import React from 'react'

type Props = {}

const Platform = (props: Props) => {
  return (
    <div className='p-8'>
        <div className='flex justify-between items-center pb-2'>
            <h2 className='text-xl font-semibold'>PLT4M</h2>
            <h2 className='text-xs font-normal text-green-500 cursor-pointer'>View All</h2>
        </div>
    </div>
  )
}

export default Platform