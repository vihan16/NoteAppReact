import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, reference}){
    return (
        <motion.div drag dragConstraints={reference} className=' relative flex-shrink-0 w-60 h-72 p-5 rounded-[40px] bg-zinc-800 text-white overflow-hidden'>
            <FaRegFileAlt/>
            <p className='text-sm leading-tight mt-5 '>{data.desc}</p>
            <div className='footer absolute bottom-0   w-full  left-0'>
                <div className='flex items-center py-3 px-6  mb-2 justify-between'>
                    <h5>{data.filesize}</h5>
                    <span className='w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center'>
                        {data.close ? <IoMdClose color='000'/> :<GoDownload size='1em' color='#000'/> }
                        
                    </span>
                </div>
                {data.tag.isOpen && (
                    <div className={`tag w-full py-4 bg-${data.tag.tagColor}-200 flex justify-center item-center`}>
                    <h3 className='text-md text-black'>{data.tag.tagTitle}</h3>
                </div>
                ) }
            </div>
        </motion.div>
        
    )
}

export default Card