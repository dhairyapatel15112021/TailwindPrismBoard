import React from 'react'
import { Data } from './Data'
import { OverviewCard } from './OverviewCard'
import { Transactions } from './Transactions'
export const Overview = () => {
  return (
    <div className='bg-[#f6f6f6] col-span-8 sm:col-span-7  row-span-9 px-8 py-6'>
      <div className='h-[100%]'>
        <div className='flex justify-between items-center'>
          <div className='text-[#1A181E] text-[20px]'>Overview</div>
          <select className='px-2 py-1 rounded-sm outline-none'>
            <option>Last Month</option>
          </select>
        </div>
        <div className='flex w-[40%] sm:w-[15%] justify-between text-[14px]'>
          <div className='text-[#146EB4] py-4 border-[#146EB4] border-b-4'>Razorpay</div>
          <div className='text-[#808080] py-4'>Cashfree</div>
        </div>
        <hr />
        <div className='grid grid-cols-2 gap-7 py-4'>
          {
            Data.map((item,index)=>{
              return(
                <OverviewCard text={item.text} amount={item.amount} key={index}/>
              )
            })
          }
        </div>
        <Transactions/>
      </div>
    </div>
  )
}
