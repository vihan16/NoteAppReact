import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

function Card(){
    return (
        <div className=' relative w-60 h-72 p-5 rounded-[40px] bg-zinc-800 text-white overflow-hidden'>
            <FaRegFileAlt/>
            <p className='text-sm leading-tight mt-5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas possimus enim placeat fuga.</p>
            <div className='footer absolute bottom-0   w-full  left-0'>
                <div className='flex items-center py-3 px-6  mb-2 justify-between'>
                    <h5>.4mb</h5>
                    <span className='w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center'>
                        <GoDownload size='1em' color='#000'/>
                    </span>
                </div>
                <div className='tag w-full py-4 bg-yellow-200 flex justify-center item-center'>
                    <h3 className='text-md text-black'>Download Now</h3>
                </div>
            </div>
        </div>
        
    )
}

export default Card