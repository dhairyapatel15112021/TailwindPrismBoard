import React from 'react'
import { Balance } from './Balance'
import { Navbar } from './Navbar'
import { NavbarTop } from './NavbarTop'

export const Sidebar = () => {
  return (
    <div className='bg-[#1e2640] row-span-10'>
      <div className='h-[91%] flex flex-col p-2 text-white'>
        <NavbarTop/>
        <Navbar />
      </div>
      <div className='h-[9%] p-2'>
        <Balance />
      </div>
    </div>
  )
}
