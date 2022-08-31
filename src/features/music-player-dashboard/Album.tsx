import React from 'react'

export default function Album({
    title,
    artist,
    image,
}: {
    title: string,
    artist: string,
    image: string,
}) {
    return (
        <div className='min-h-[200px] w-[200px]  mr-8'>
            <img src={image} className='h-[200px] w-[200px] rounded-2xl'/>
            <div>
                <h2 className='text-white text-sm mt-2'>{title}</h2>
                <p className='text-gray-500 text-xs'>{artist}</p>
            </div>
        </div>
    )
}
