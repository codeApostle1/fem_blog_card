import React from 'react'
import image from '../assets/images/image-avatar.webp'

const Footer = () => {
  return (
    <div className='flex align-center  gap-[12px] w-[129px] h-[32px]'>
        <img src={image} alt="" className='class=" w-[32px] h-[32px]"' />
        <p className='text-center align-middle text-[13px]'>Greg Hooper</p>
    </div>
  )
}

export default Footer