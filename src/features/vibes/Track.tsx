import React from 'react'
import { motion, MotionStyle } from 'framer-motion'
import { useWindowResize } from 'src/hooks/useWindowResize'

interface TrackProps {
    direction?: 'up' | 'down'
    images?: string[]
    left?: number | string | undefined
    right?: number | string | undefined
}

function Track({
    direction = 'up',
    images = [],
    left = undefined,
    right = undefined,
}: TrackProps) {

    const { width } = useWindowResize()

    const imageWidth = width * 0.24

    const PADDING = 16

    const animateYDistance = (imageWidth * (images.length - 6)) + (PADDING * (images.length - 6))
    
    const marqueeVariantsUp = {
        animate: {
            y: [0, -animateYDistance],
            transition: {
                y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 100,
                    ease: "linear",
                },
            },
        },
    };

    const marqueeVariantsDown = {
        animate: {
            y: [0 + width, animateYDistance],
            transition: {
                y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 100,
                    ease: "linear",
                },
            },
        },
    };

    let style: MotionStyle | undefined = {}

    if (direction === 'up')
        style = { top: 0, left, right, maxWidth: imageWidth + "px" }

    else if (direction === 'down')
        style = {
            bottom: 0,
            right,
            left,
            maxWidth: imageWidth + "px"
        }

    return (
        <motion.div
            className='absolute'
            style={style}
            variants={direction === "up" ? marqueeVariantsUp : marqueeVariantsDown}
            animate="animate"
        >
            {
                images.map((image, index) => {
                    return (
                        <div className='mb-4'>
                            <img src={image} alt={`${index}`} />
                        </div>
                    )
                })
            }
        </motion.div>
    )
}

export default Track