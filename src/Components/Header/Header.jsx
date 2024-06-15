import React from 'react'

export const Header = () => {
    return (
        <div className='col-span-7 grid grid-cols-5 shadow-md p-2 text-gray-500 items-center'>
            <div className='grid grid-cols-2 p-2 place-items-center'>
                <div className='text-[#1A181E] text-[20px]'>Payments</div>
                <div className='flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    <div className='pl-2 text-[#4D4D4D] text-[12px]'>How it works</div>
                </div>
            </div>
            <div className='col-span-2 col-start-3'>
                <div className='flex w-[70%] items-center bg-[#F2F2F2] p-2 rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" className='w-[100%] ml-2 rounded-none bg-[#F2F2F2] outline-none text-[#808080] placeholder:text-[#808080] placeholder:text-[15px]' placeholder='Search features, tutorials, etc.' />
                </div>
            </div>
            <div className='flex justify-end gap-x-2 mr-[6%]'>
                <div className='w-10 h-10 bg-[#E6E6E6] rounded-full flex justify-center items-center text-xl'>
                    <i className="fa-solid fa-bullhorn"></i>
                </div>
                <div className='w-10 h-10 bg-[#E6E6E6] rounded-full flex justify-center items-center text-2xl'>
                    <i className="fa-solid fa-caret-down"></i>
                </div>
            </div>
        </div>
    )
}
