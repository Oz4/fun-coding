import React from 'react'
import Image from 'next/image'
import people_dancing_image from "./dancing-bg.jpg"
import albums from './albums-data.json'
import Album from './Album'
import ListItem from './ListItem'
function MainDashboard() {
    return (
        <div className='w-full relative'>

            {/* landing */}
            <Image src={people_dancing_image} className="w-full h-[100px] object-cover object-bottom" height="500px" />
            <div className='absolute top-0 left-0 p-8 pt-16 text-white'>
                <p className='mb-4'>Top Playlists</p>
                <h1 className='text-3xl'><span className='font-bold'>MUSIC</span> CHANGES THE</h1>
                <h1 className='mb-4 text-3xl'> WORLD BECAUSE IT CHANGES PEOPLE</h1>
                <p>We aim to achieve our goals by creative music processes</p>
                <button className='bg-[#7E2EB2] rounded-full mt-4 w-32 h-10'>Play Now</button>
            </div>
            <div className='p-8'>

                {/* albums */}
                <h2 className='text-white text-base mb-4'>Best albums of all time</h2>
                <div className='flex'>
                    {
                        albums.map((album, index) => {
                            return (
                                <Album
                                    key={index}
                                    title={album.title}
                                    artist={album.artist}
                                    image={album.image}
                                />
                            )
                        })
                    }
                </div>

                {/* This week's top #20 */}
                <h2 className='text-white text-base mt-8 mb-4'>This week's top #20</h2>
                <div className='flex-col'>
                    {
                        Array(20).fill(0).map((_, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    index={index}
                                    title={"title"}
                                    artist={"artist"}
                                    image={"https://i.scdn.co/image/ab67616d00001e022be08c60dcb4b5608abbe61e"}
                                    album={"album"}
                                    playCount={"0"}
                                    catagory={"catagory"}
                                    duration={"0"}
                                />
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}

export default MainDashboard