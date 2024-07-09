import React from 'react'

export const OverviewCard = ({text,amount}) => {
  return (
    <div className=' bg-white p-4 rounded-md flex flex-col gap-1'>
        <div className='text-[#4D4D4D] text-[16px] font-normal'>{text}</div>
        <div className='text-[#1A181E] text-[20px] sm:text-[32px] font-medium'>{amount}</div>
    </div>
  )
}
