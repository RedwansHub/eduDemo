import React from 'react'
import chess from '../../../public/Assets/Classroom/Chess.svg'
import wordle from '../../../public/Assets/Classroom/wordle.svg'
import puzzle from '../../../public/Assets/Classroom/puzzle.svg'
import Image from 'next/image';
import { BsPlay } from 'react-icons/bs';
type Props = {}

const Activities = (props: Props) => {
    const containers = Array.from({ length: 3 }, (_, index) => index + 1);

    const Items = [
        {id: 1, name: 'Chess', Img: chess},
        {id: 2, name: 'Wordle', Img: wordle},
        {id: 3, name: 'Puzzle', Img: puzzle},
    ]
  return (
    <div>
        <div className='flex justify-between items-center py-1'>
            <h2 className='text-xl font-semibold'>Activities</h2>
            <h2 className='text-xs font-medium text-green-500 cursor-pointer'>View All</h2>
        </div>
        <div className='flex gap-2 '>
            {Items.map((item) => (
                <div key={item.id} className='w-full rounded-md border border-[#07E073]'>
                    <Image src={item.Img} alt='chess' width={250} height={250} className='rounded-md' />
                    <div className='flex justify-between items-center p-2 '>
                        <h2 className='text-center font-semibold text-sm '>{item.name}</h2>
                        <BsPlay size={25} color='#07E073'/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Activities