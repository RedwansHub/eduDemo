 import React from 'react'
import Materials from '../Materials'
import Incoming from '../Incoming'
import NotesContainer from '../NotesContainer'
import Attendance from '../Attendance'
import Chat from '../Chat'
import Platform from '../Platform'
import Activities from '../Activities'

type Props = {}

const Activity = (props: Props) => {
  return (
    <div className='pt-8'> 
        <div className="grid grid-cols-3 gap-4">
            <div className="rounded-md "><Incoming /></div>
            <div className="col-start-1 row-start-2"><Activities /></div>
            <div className=" col-start-1 row-start-3"><NotesContainer /></div>
            <div className="row-span-2 col-start-2 row-start-1"><Chat /></div>
            <div className="col-start-2 row-start-3"><Attendance /></div>
            <div className="border border-green-500 rounded-md  row-span-3 col-start-3 row-start-1"><Platform /></div>
        </div>
      
    
    </div>
  )
}

export default Activity