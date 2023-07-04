import React from 'react'

type Props = {
    title: string,
    width?: string | 'w-24',
    bg?: string,
    onClick: () => void

}
const AuthButton = ({title, width, onClick,  bg}: Props) => {
  return (
    <div onClick={onClick}
        className={`${width} py-2 px-4 rounded-md text-black font-semibold text-sm cursor-pointer bg-green-500 hover:bg-green-400/75`}>
        {title}
    </div>
  )
}

export default AuthButton