import { Box, Slider as ChakaraSlider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react"
import React from 'react'

interface ISliderProps {
    onChange: (val: number) => void
    step?: number
    min?: number
    max?: number
    value: number,
    title: string | React.ReactNode
}

const Slider = ({
    onChange,
    step = 1,
    min = 10,
    max = 200,
    value,
    title
}: ISliderProps) => {
    return (
        <Box>
            <p className="text-gray-100 text-sm">{title}</p>
            <ChakaraSlider aria-label='slider-ex-1' defaultValue={0} onChange={onChange} step={step} min={min} max={max} animation={'ease-in-out'} value={value} marginBottom="1rem">
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </ChakaraSlider>
        </Box>
    )
}

export default Slider
