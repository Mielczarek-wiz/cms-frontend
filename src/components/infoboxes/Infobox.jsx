import Image from 'next/image'
import React from 'react'

export default function Infobox({id, iconRef="", information="", subInformation="", isVisible=true, width=32, height=32}) {

    if(!isVisible) return null
    return (
        <div className='flex flex-row items-center justify-start h-16 w-52'>
            <div className='pr-4 w-fit h-fit'>
                <Image src={iconRef} alt="Icon alternative" width={width} height={height} />
            </div>
            <div className='flex flex-col items-start justify-center'>
                <div>
                    <span className='text-sm md:text-lg'>{information}</span>
                </div>
                <div>
                    <span className='text-sm md:text-lg'>{subInformation}</span>
                </div>
            </div>

        </div>
    )
}
