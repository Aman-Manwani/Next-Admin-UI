import Image from 'next/image'
import React from 'react'
import Plus from '../../public/assets/Plus.svg'
import Card from '../layouts/Card'

const Progress = ({heading,NoOfCards}) => {
  return (
    <div className='flex flex-col    text-white mt-5'>
        <div className='flex items-center justify-between px-3 py-5'>
            <div className='text-[20px] font-bold'>
                {heading}
            </div>
            <div className='rounded-[14px] p-4 bg-[#6418C3] cursor-pointer'>
                <Image src={Plus} alt=''/>
            </div> 
        </div>
        <div className='flex items-start flex-col gap-[20px]'>
            <Card caption="Important" title={"Create sign up sheet for holiday student/parent conferences."} done={66} bcolor="#FFAB2D"/>
            <Card caption="Important" title={"Create sign up sheet for holiday student/parent conferences."}  done={33} bcolor="#E328AF"/>
        </div>
    </div>
  )
}

export default Progress
