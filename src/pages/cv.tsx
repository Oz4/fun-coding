import { Box } from '@chakra-ui/react'
import React from 'react'
import Cv from 'src/features/cv/Cv'

function cv() {
    return (
        <Box className='w-full h-[297mm] flex justify-center items-center bg-[#fff]'>
            <Cv />
        </Box>
    )
}

export default cv