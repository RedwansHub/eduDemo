'use client'

import { Menu } from '@headlessui/react'
import React, { useState } from 'react'

type Props = {}

const Options = (props: Props) => {

  const [selectedUser, setSelectedUser] = useState('');
    const select = (id: string) => {
        setSelectedUser(id)
    }

  return (
    <div className='relative z-80'>
        <Menu>
      <Menu.Button>View</Menu.Button>
      <Menu.Items className={'fixed z-20 flex flex-col bg-black/80 p-2 w-24 rounded-md gap-2'}>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500 '} px-2 rounded-sm`}
              href="/account-settings"
            >
              Edit
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500 '} px-3 rounded-sm`}
              href="/account-settings"
            >
              Delete
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
    </div>
  )
}

export default Options