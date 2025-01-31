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
                            <div className='flex flex-row items-center h-8 mb-2'>
                                <p className='text-2xl font-bold tracking-wide text-gray-900'>Taski</p>
                            </div>
                        </li>
                        <li>
                            <Link to='/demo' class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <span class="material-symbols-rounded">
                                        home
                                    </span>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Inicio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/demo/tasks" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <span class="material-symbols-rounded">
                                        task
                                    </span>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Tareas</span>
                            </Link>
                        </li>
                        <li>
                        <Link to='/demo/workspaces' class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                <span class="material-symbols-rounded">
                                    workspaces
                                    </span>
                                </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Mesas de Trabajo</span>
                            <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
                        </Link>
                        </li>
                        <li class="px-6">
                            <div class="flex flex-row items-center h-8">
                                <div class="text-sm font-light tracking-wide text-gray-500">Configuración</div>
                            </div>
                        </li>
                        <li>
                            <Link to="/demo/profile" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <span class="material-symbols-rounded">
                                        person
                                    </span>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Perfil</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/demo/settings" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <span class="material-symbols-rounded">
                                        settings
                                    </span>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Configuración</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <span class="material-symbols-rounded">
                                        logout
                                    </span>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Cerrar sesión</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default DemoSidebar