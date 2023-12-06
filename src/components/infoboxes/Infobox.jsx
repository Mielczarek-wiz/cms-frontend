import Image from 'next/image'
import React from 'react'

export default function Infobox({id, iconRef="", information="", subInformation="", isVisible=true, width=32, height=32}) {

    if(!isVisible) return null
    return (
        <div className='flex flex-row items-center justify-start w-64 h-16'>
            <div className='flex flex-row items-center justify-center w-10 h-10 mr-4 border rounded-full border-slate-500 '>
                <Image src={iconRef} alt="Icon alternative" width={width} height={height} />
            </div>
            <div className='flex flex-col items-start justify-center'>
                <div>
                    <span className='text-sm text-slate-500 md:text-md'>{information}</span>
                </div>
                <div>
                    <span className='text-sm text-slate-500 md:text-md'>{subInformation}</span>
                </div>
            </div>

        </div>
    )
}
