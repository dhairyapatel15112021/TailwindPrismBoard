import React from 'react';
import { upperdata, lowerdata } from './Data';
export const Navbar = () => {
    return (
        <div className='h-[90%] flex flex-col'>
            {
                upperdata.map((item, index) => {
                    return (
                        <div className='flex w-[100%] py-2' key={index}>
                            <div className='w-[20%] ml-[5%]'>{item.icon}</div>
                            <div>{item.text}</div>
                        </div>
                    )
                })
            }
            <div className='flex w-[100%] bg-[#353C53] py-2 rounded-md'>
    
                <div className='w-[20%] ml-[5%]'><i class="fa-regular fa-credit-card"></i></div>
                <div>Payments</div>
            </div>
            {
                lowerdata.map((item, index) => {
                    return (
                        <div className='flex w-[100%] py-2' key={index}>
                            <div className='w-[20%] ml-[5%]'>{item.icon}</div>
                            <div>{item.text}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
