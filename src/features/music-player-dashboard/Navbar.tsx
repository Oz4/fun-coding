import React, { useState } from 'react'
RiSearch2Line
import { RiSearch2Line, RiNotificationFill } from 'react-icons/ri';
import { IoMdExit } from 'react-icons/io'
function NavBarListItem({
    name,
    clicked,
    setClickedLink,
    index,
}: {
    name: string
    clicked: boolean
    setClickedLink: React.Dispatch<React.SetStateAction<number>>
    index: number
}) {
    return (
        <div className='mr-16'>
            <p className={clicked ? "text-gray-200" : "text-gray-500 hover:text-gray-300 transition-all"} onClick={() => setClickedLink(index)}>
                {name}
            </p>
        </div>
    )
}

function Navbar() {

    const [clickedLink, setClickedLink] = useState<number>(0)

    return (
        <div className='h-[72px] text-sm'>

            <div className='flex justify-between items-center mx-16'>

                <div className='flex h-[72px] items-center'>
                    <NavBarListItem name="What's new?" clicked={clickedLink === 0} setClickedLink={setClickedLink} index={0} />
                    <NavBarListItem name="Trending" clicked={clickedLink === 1} setClickedLink={setClickedLink} index={1} />
                    <NavBarListItem name="Favorites" clicked={clickedLink === 2} setClickedLink={setClickedLink} index={2} />
                    <NavBarListItem name="Recently played" clicked={clickedLink === 3} setClickedLink={setClickedLink} index={3} />
                </div>


                <div className='flex h-[72px] items-center'>
                    <div className='w-[500px] bg-[#181D29] h-[40px] rounded-full mr-8 flex items-center pl-4'>
                        <span className='mr-2'>
                            <RiSearch2Line size="1.2em" />
                        </span>
                        <p>
                            Search music, albums, and artists...
                        </p>
                    </div>
                    <span className='mr-8'><RiNotificationFill size="1.5em" /></span>
                    <span><IoMdExit size="1.5em" /></span>
                </div>


            </div>



        </div>
    )
}

export default Navbar