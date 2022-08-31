import React from 'react'
import { RiHomeFill, RiFolderFill, RiFolderMusicFill, RiMic2Fill, RiHeart3Fill, RiFireFill, RiSettingsFill } from 'react-icons/ri'
import { BsSoundwave, BsFillQuestionSquareFill, BsFillMoonFill } from 'react-icons/bs'
function PageSidebar() {

    const Profile = () => {
        return <img src='https://picsum.photos/40/40' className="w-10 h-10 bg-black rounded-full"/>
    }
    return (
        <div className='w-[100px] bg-[#0A0F1B]'>
            <div style={{
                width: '100%',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "5rem"
            }}>
                <RiHomeFill size="1.5em" className='mb-10' />
                <RiFolderFill size="1.5em" className='mb-10' />
                <RiFolderMusicFill size="1.5em" className='mb-10' />
                <BsSoundwave size="1.5em" className='mb-10' />
                <RiMic2Fill size="1.5em" />
                <div className='px-8 my-10 border-b border-gray-500'></div>
                <RiHeart3Fill size="1.5em" className='mb-10' />
                <RiFireFill size="1.5em" className='mb-10' />
                <BsFillQuestionSquareFill size="1.5em" className='mb-10' />

                <BsFillMoonFill size="1.5em" className='mb-10 mt-20' />
                <RiSettingsFill size="1.5em" className='mb-10' />

                <Profile />

            </div>
        </div>
    )
}

export default PageSidebar