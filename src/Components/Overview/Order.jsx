import React from 'react'
import { OrderData } from './OrderData'

export const Order = () => {
    return (
        <div className='grid grid-cols-1 grid-rows-5 p-1 sm:p-2'>
            <div className='grid grid-cols-4 grid-rows-1 gap-3 sm:gap-6 bg-[#F2F2F2] p-2 rounded-md text-[#4D4D4D] text-[12px]'>
                <div className='ml-2 flex items-center'>Order ID</div>
                <div className='flex items-center'>
                    <div>Order Date</div>
                    <div><i className="fa-solid fa-caret-down ml-1"></i></div>
                </div>
                <div className='sm:place-self-end flex items-center'>Order amount</div>
                <div className='flex place-self-end mr-2 items-center'>
                    <div>Transactios fess</div>
                    <div className='h-4 w-4 border border-[#4D4D4D] rounded-full flex items-center justify-center ml-1'><i class="fa-solid fa-exclamation"></i></div>
                </div>
            </div>
            {
                OrderData.map((item, index) => {
                    return (
                        <div>
                            <div className='grid grid-cols-4 grid-rows-1 gap-3 sm:gap-6 p-2 rounded-md text-[#4D4D4D] text-[12px]'>
                                <div className='ml-2 text-[#146EB4]'>{item.id}</div>
                                <div>{item.date}</div>
                                <div className='sm:place-self-end'>{item.amount}</div>
                                <div className='place-self-end mr-2'>{item.fees}</div>
                            </div>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}
