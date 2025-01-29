import React from 'react'
import DemoSidebar from './DemoSidebar'

const DemoTasks = () => {
  return (
    <>
        <DemoSidebar />
        <div className='p-6 sm:ml-64'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-3xl mb-4'>Tareas</h1>
                <div className='mr-4'>
                    <button className='bg-gray-900 text-gray-100 rounded-full px-6 py-2 hover:bg-gray-800'>
                        Añadir tarea
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default DemoTasks