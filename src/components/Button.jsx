import React from 'react'

export const Button = ({text,className, ...args}) => {
 
  return (
    <button {...args} className={`${className} w-[190px] h-[65px] text-white font-bold   rounded-lg bg-gradient-to-r from-[#7E90FE] 0%  to-[#9873FF] 100%`}>{text}</button>
  )
}
