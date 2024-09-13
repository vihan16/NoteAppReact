import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

function Card(){
    return (
        <div className=' relative w-60 h-72 p-5 rounded-[40px] bg-zinc-800 text-white overflow-hidden'>
            <FaRegFileAlt/>
            <p className='text-sm leading-tight mt-5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas possimus enim placeat fuga.</p>
            <div className='footer absolute bottom-0 py-3 px-6  w-full h-16 left-0'>
                <div className='flex items-center justify-between'>
                    <h5>.4mb</h5>
                    <span className='w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-centre'>
                        <GoDownload size='1em' color='#000'/>
                    </span>
                </div>
            </div>
        </div>
        
    )
}

export default Card