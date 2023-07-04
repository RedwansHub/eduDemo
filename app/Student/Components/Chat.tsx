import React from 'react'

type Props = {}

const Chat = (props: Props) => {
  return (
    <div className='px-2 h-full'>
        <div className='flex justify-between items-center pb-2'>
            <h2 className='text-xl font-semibold'>Chat</h2>
            <h2 className='text-xs font-normal text-green-500 cursor-pointer'>View All</h2>
        </div>
        <div className='bg-[#242424] rounded-md cursor-pointer h-[90%] py-4 px-12'>
            <h2 className='text-center font-medium text-sm text-white/30 pt-16'>No Chats Avaiable</h2>
            <div className='flex items-end h-[60%] '>
                <div className='border border-green-800 bg-[#1A1A1A] rounded-md text-center text-sm text-green-500 py-3 shadow-lg w-full'>Start New Chat</div>
            </div>
        </div>
    </div>
  )
}

export default Chat