import React from 'react'
import { Link } from 'react-router-dom'

const DemoSidebar = () => {
  return (
    <>
        <div className='flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800'>
            <div className='fixed flex flex-col top-0 left-0 w-64 bg-gray-100 h-full border-r'>
                <div className='overflow-y-auto overflow-x-hidden flex-grow'>
                    <ul className='flex flex-col py-4 space-y-1'>
                        <li className='px-5'>
                            <div className='flex flex-row items-center h-8'>
                                <p className='text-2xl font-bold tracking-wide text-gray-900'>Taski</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default DemoSidebar