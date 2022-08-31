import React from 'react'
import { TiUser } from 'react-icons/ti'
import { RiHeadphoneFill, RiMusic2Fill, RiHeart3Fill, RiMore2Fill } from 'react-icons/ri'
import { MdAccessTimeFilled } from 'react-icons/md'
function ListItem({
    index,
    title,
    artist,
    image,
    album,
    playCount,
    catagory,
    duration,
}: {
    index: number,
    title: string,
    artist: string,
    image: string,
    album: string,
    playCount: string,
    catagory: string,
    duration: string,
}) {

    const Index = () => {
        return (<div>
            <span className='text-gray-500 text-xs mr-4'>#{index + 1}</span>
        </div>)
    }
    const Info = () => {
        return (<div className='flex'>
            <img src={image} className='w-[40px] h-[40px] mr-4' />
            <div className='flex-col'>
                <h2 className='text-white text-sm '>{title}</h2>
                <p className='text-white text-xs '>{album}</p>
            </div>
        </div>
        )
    }
    const Artist = () => {
        return (<div className='flex'>
            <TiUser />
            <h2 className='text-gray-500 text-sm'>{artist}</h2>
        </div>)
    }
    const PlayCount = () => {
        return (<div className='flex'>
            <RiHeadphoneFill />
            <span className='text-gray-500 text-xs'>{playCount}</span>
        </div>)
    }
    const Catagory = () => {
        return (<div className='flex'>
            <RiMusic2Fill />
            <span className='text-gray-500 text-xs'>{catagory}</span>
        </div>)
    }
    const Duration = () => {
        return (<div className='flex'>
            <MdAccessTimeFilled />
            <span className='text-gray-500 text-xs'>{duration}</span>
        </div>)
    }
    const Like = () => {
        return (<div className='flex'>
            <RiHeart3Fill />
        </div>)
    }
    const More = () => {
        return (<div className='flex'>
            <RiMore2Fill />
        </div>)
    }
    return (
        <>
            <div className='flex justify-between items-center mb-4'>
                <div className='flex'>
                    <Index />
                    <Info />
                </div>
                <Artist />
                <PlayCount />
                <Catagory />
                <Duration />
                <Like />
                <More />
            </div>
            <div className='border-b border-gray-500 ml-12 mb-4'/>
        </>
    )
}

export default ListItem