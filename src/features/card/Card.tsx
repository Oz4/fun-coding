import Image from 'next/image'
import React from 'react'
import { Box } from "@chakra-ui/react"

interface ICardProps {

    title: string | React.ReactNode
    content: string | React.ReactNode
    image: string
    footerLeftContent: string | React.ReactNode
    footerRightContent: string | React.ReactNode
    borderRadius?: "0.25rem" | "0.5rem" | "1rem" | string
    padding?: "0.25rem" | "0.5rem" | "1rem" | string
    width?: string
    minHeight?: string
    bgColor?: string
    hoverColor?: string
}

function Card({
    title,
    content,
    image,
    footerLeftContent,
    footerRightContent,
    borderRadius = "0",
    padding = "2",
    width = "200px",
    minHeight = "200px",
    bgColor = "#21262A",
    hoverColor = "#343A3F",
}: ICardProps) {

    const Title = () => {
        return (
            <div className="text-base text-gray-300 pt-2">
                {title}
            </div>
        )
    }

    const Content = () => {
        return (
            <div className="text-sm py-2">
                {content}
            </div>
        )
    }

    const Footer = () => {

        return (
            <div className="w-full flex justify-between items-center self-end text-sm pt-2 border-t border-t-[#FFFFFF29]">
                <div>{footerLeftContent}</div>
                <div>{footerRightContent}</div>
            </div>
        )
    }


    return (
        <Box
            className={`flex-col cursor-pointer transition-all text-white`}
            borderRadius={borderRadius}
            padding={padding}
            width={width}
            minHeight={minHeight}
            bg={bgColor}
            _hover={{
                bg: hoverColor,
            }}
        >
            <Image src={image} width={200} height={200} style={{ borderRadius }} />
            <div >
                <Title />
                <Content />
                <Footer />
            </div>

        </Box>
    )

}

export default Card