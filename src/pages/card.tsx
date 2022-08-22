import React, { useState } from 'react'
import Card from 'src/features/card/Card'
import { Box } from "@chakra-ui/react"
import { SliderPicker as ColorPicker } from 'react-color';
import Slider from 'src/features/card/Slider';
function card() {

    const [padding, setPadding] = useState(25)
    const [bgColor, setBgColor] = useState('#21262A')
    const [hoverColor, setHoverColor] = useState('#343A3F')
    const [borderRadius, setBorderRadius] = useState(8)

    return (
        <Box className='w-full h-[100vh] flex justify-center items-center bg-[#121619]'>

            <Box className='flex flex-row w-[600px] justify-between items-center flex-wrap p-4'>

                <Box>

                    <Slider onChange={(val) => { setPadding(val) }} step={1} min={10} max={200} value={padding} title="Padding" />

                    <Slider onChange={(val) => { setBorderRadius(val) }} step={1} min={0} max={32} value={borderRadius} title="Border Radius" />

                    <p className="text-gray-100 text-sm">Backround Color</p>
                    <ColorPicker className='mb-4' color={bgColor} onChange={(color) => setBgColor(color.hex)} />

                    <p className="text-gray-100 text-sm">Hover Background Color</p>
                    <ColorPicker className='mb-4' color={hoverColor} onChange={(color) => setHoverColor(color.hex)} />

                </Box>

                <Card
                    title="Azuki #3628"
                    content='A brand for the metaverse. Built by the community.'
                    image="https://img.seadn.io/files/929056e1673ada689a8eeef67561a086.png?fit=max&w=600"
                    footerLeftContent="$1,000"
                    footerRightContent="..."
                    borderRadius={(borderRadius) + "px"}
                    width="200px"
                    minHeight="300px"
                    padding={(padding / 50) + 'rem'}
                    bgColor={bgColor}
                    hoverColor={hoverColor}
                />


            </Box>
        </Box>

    )
}

export default card