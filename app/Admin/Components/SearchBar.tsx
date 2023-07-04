'use client'

import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

type Props = {
    value: string;
    onChange: (value: string) => void;
  };

const SearchBar = ({ value, onChange }: Props) => {
  

  return (
    <div className='border border-[#07E073]/50 w-80 p-1 rounded-md flex items-center'>
      <input
        type='text'
        name='SearchValue'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='Search User'
        className='px-2 py-1 w-full bg-transparent outline-none font-medium text-sm'
      />
      <AiOutlineSearch size={23} color='#07E073' className='cursor-pointer' onClick={() => onChange(value)}/>
    </div>
  )
}

export default SearchBar