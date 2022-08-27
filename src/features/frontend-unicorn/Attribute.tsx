import React from 'react'

function Attribute() {
    return (
        <div className='w-full h-[5vh] bg-[#f5edff] flex justify-end items-center'>
            <p className='mr-8 text-lg'>
                by <a
                    href='https://dribbble.com/shots/11422057-Frontend-Unicorn-Logo-series-of-books-for-front-end-developers'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[#ab66ff] transition-all duration-200 ease-in-out hover:text-[#ff66f9]'
                >Diana Malewicz</a>
            </p>
        </div>
    )
}

export default Attribute