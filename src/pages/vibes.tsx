import React from 'react'
import { Page } from 'src/features/vibes'
function vibes() {

    const Attribute = () => {
        return (
            <div className=' absolute top-[93vh] right-[20px] text-white'>
                <div className='bg-[#00000077] px-4 py-2 rounded-full text-base font-bold'>
                    <a href="https://vibes.framer.website/" target="_blank" rel="noopener noreferrer">
                        Framer Motion
                        <span className='text-yellow-300 ml-1'>
                            Vibes
                        </span>
                    </a>
                </div>
            </div >
        )
    }
    return (
        <div>
            <Page />
            <Attribute />
        </div>
    )
}

export default vibes

