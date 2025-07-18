import React from 'react'

const Text = () => {
  return (
    <div className=' flex flex-col gap-[12px]'>
        <p className='px-[12px] py-[4px] bg-[#f4d04e] rounded-sm w-[82px]  '>Learning</p>
        <p className='text-grey-900'>Published 21 Dec 2023</p>
        <h1 className='text-[#f4d04e] text-xl font-bold'>HTML & CSS foundations</h1>
        <p className='text-[#6b6b6b] text-sm'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
    </div>
  )
}

export default Text