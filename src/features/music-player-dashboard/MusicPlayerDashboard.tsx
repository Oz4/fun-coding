import React from 'react'
import MainDashboard from './MainDashboard'
import MusicSidebar from './MusicSidebar'
import Navbar from './Navbar'
import PageSidebar from './PageSidebar'

function MusicPlayerDashboard() {
  return (
    <div className='bg-[#111823] w-full min-h-screen text-[#74727F] font-medium'>
      <div className='flex w-full min-h-screen'>
        <PageSidebar />
        <div className='w-full'>
          <Navbar />
          <div className='flex' style={{
            height: 'calc(100% - 72px)',
          }}>
            <MusicSidebar />
            <MainDashboard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayerDashboard