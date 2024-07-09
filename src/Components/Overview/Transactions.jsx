import React from 'react'
import { Order } from './Order'

export const Transactions = () => {
    return (
        <div>
            <div className='text-[#1A181E] text-[20px]'>Transctions | This Month</div>
            <div className='bg-white p-2 mt-2 rounded-md'>
                <div className='flex justify-between items-center p-2'>
                    <div className='flex items-center justify-between border border-[#999999] rounded-md p-2 w-[40%] sm:w-[20%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#999999" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input className='text-[#999999] text-[14px] placeholder:text-[#999999] placeholder:text-[14px] outline-none w-[90%]' type="text" placeholder='Search by order ID...' />
                    </div>
                    <div className='flex items-center justify-between sm:w-[10%]'>
                        <div className='flex justify-between border border-[##999999] rounded-sm py-1 px-1.5 sm:w-[60%]'>
                            <div className='text-[#4D4D4D] text-base font-normal'>Sort</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4D4D4D" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                            </svg>
                        </div>
                        <div className='border border-[##999999] rounded-sm py-1 px-1.5'>
                            <i className="fa-solid fa-download text-base text-[#4D4D4D]"></i>
                        </div>
                    </div>
                </div>
                <Order/>
            </div>

        </div>
    )
}
