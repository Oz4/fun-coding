import React from 'react'
import styles from './animation.module.css'

function Landing() {

    const Logo = () => {
        return (
            <div className='rotate-45 w-[100px] h-[100px] scale-150'>
                {/* unicorn */}
                <div className='w-[100px] h-[100px] absolute top-0 left-0 shadow-2xl' style={{
                    background: "linear-gradient(to top right, #ab66ff 50%, white 50%)"
                }}>

                    {/* body */}
                    <div className='w-[66px] h-[66px] absolute top-[34px] left-0' style={{
                        background: "linear-gradient(to top right, #f8e71c 50%, #ffffff01 50%)"
                    }} />

                    <div className='w-[33px] h-[33px] absolute top-[67px] left-0' style={{
                        background: "linear-gradient(to top right, #ff66f9 50%, #ffffff01 50%)"
                    }} />

                    {/* eye */}
                    <div className='w-[12px] h-[12px] bg-black rounded-full absolute top-[25px] left-[65px]' />

                </div>

                {/* corn */}
                <div className='w-[24px] h-[24px] bg-white absolute top-[-12px] left-[38px] rotate-45' />

                {/* particle */}
                <div className={styles.particle} />

            </div>)
    }
    const Title = () => {
        return (<h1 className='text-6xl text-[#413455] font-extrabold max-w-xs ml-48 scale-150'>
            frontend unicorn.
        </h1>)
    }

    return (
        <div className='w-full h-[95vh] bg-[#f5edff] flex justify-center items-center'>
            <Logo />
            <Title />
        </div>
    )
}

export default Landing