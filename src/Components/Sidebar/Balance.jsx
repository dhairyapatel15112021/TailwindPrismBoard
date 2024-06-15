import React from 'react'

export const Balance = () => {
    return (
        <div className='bg-[#353C53] text-white flex justify-evenly items-center rounded-sm p-1'>
            <div className='bg-[#424c6e] px-2 py-1 rounded-md'><i class="fa-solid fa-wallet"></i></div>
            <div>
                <div className='text-[13px]'>Available credits</div>
                <div className='text-[16px]'>222.10</div>
            </div>
        </div>
    )
}
