import Image from 'next/image'
import React from 'react'

interface ICardProps {

    title: string | React.ReactNode
    content: string | React.ReactNode
    image: string
    footerLeftContent: string | React.ReactNode
    footerRightContent: string | React.ReactNode
    borderRadius?: "0.25rem" | "0.5rem" | "1rem" | string
    padding?: "0.25rem" | "0.5rem" | "1rem" | string
}

function Card({
    title,
    content,
    image,
    footerLeftContent,
    footerRightContent,
    borderRadius = "0"
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
            <div className="w-full flex justify-between items-center self-end text-sm pt-2 border-t  border-t-[#FFFFFF29]">
                <div>{footerLeftContent}</div>
                <div>{footerRightContent}</div>
            </div>
        )
    }

    return (
        <div className='w-[200px] min-h-[300px] flex-col bg-[#21262A] p-2 hover:bg-[#343A3F] cursor-pointer transition-all' style={{ borderRadius }}>
            <Image src={image} width={200} height={200} style={{ borderRadius }} />
            <div >
                <Title />
                <Content />
                <Footer />
            </div>

        </div>
    )

}

export default Card