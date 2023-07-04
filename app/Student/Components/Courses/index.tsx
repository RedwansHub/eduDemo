import React from 'react'

type Props = {}

const Courses = (props: Props) => {
  return (
    <div>
      <div className='grid grid-cols-6 gap-4'>
        <div className='grid col-span-2 border border-green-500 rounded-md p-2'>Course List</div>
        <div className='grid col-span-4 border border-green-500 rounded-md p-2'>Course Details</div>
      </div>
    </div>
  )
}

export default Courses