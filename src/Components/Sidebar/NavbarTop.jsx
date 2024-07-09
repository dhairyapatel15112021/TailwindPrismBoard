import React from 'react'
import img from "../../assets/dukaan.png";
export const NavbarTop = () => {
  return (
    <div className='h-[10%] flex items-center'>
        <div className='w-[30%] items-center justify-center'><img src={img} alt="profile_pic" className='rounded-sm'/> </div>
        <div className='w-[60%] p-2'>
            <div className='text-[15px] font-medium'>Dhairya</div>
            <div className='text-[14px] font-thin underline'>Visit store</div>
        </div>
        <div className='w-[10%] mr-2'><i className="fa-solid fa-chevron-down"></i></div>
    </div>
  )
}
