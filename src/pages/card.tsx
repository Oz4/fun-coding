import React from 'react'
import Card from 'src/features/card/Card'
function card() {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <Card
                title="Azuki #3628"
                content='A brand for the metaverse. Built by the community.'
                image="https://img.seadn.io/files/929056e1673ada689a8eeef67561a086.png?fit=max&w=600"
                footerLeftContent="$1,000"
                footerRightContent="..."
                borderRadius="8px"
            />
        </div>

    )
}

export default card