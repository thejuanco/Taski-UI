import React from 'react'
import DemoSidebar from './DemoSidebar'

const DemoTasks = () => {

    const tasks = [
        {id: 1, title: "Terminar el front-end", description: "Terminar el maquetado de la aplicación", createdAt: "12 de Octubre del 2024", done: false},
        {id: 2, title: "Verificar los procedimientos", description: "Se tiene que probar los procedimientos de la base de datos.", createdAt: "28 de Enero del 2025", done: false},
        {id: 3, title: "Fiesta del jefe Juanco", description: "Celebrarle una fiesta al jefe con muchas morras.", createdAt: "23 de Enero del 2025", done: true},
        {id: 3, title: "Crear los endpoints del router", description: "Se tienen que crear los endpoints para la rutas y añadirse al router.js", createdAt: "09 de Enero del 2025", done: false}
    ]

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
            <div className='mt-4 grid grid-cols-3'>
                {tasks.length == 0 ? (
                    <div>
                        <h1>No hay tareas</h1>
                    </div>
                ) : (tasks.map(task => (
                        <div key={task.id} className='m-2'>
                            <div className='border rounded-lg px-6 h-64'>
                                <h2 className='font-bold text-2xl text-left mt-6'>{task.title}</h2>
                                <p className='text-gray-500 mb-8'>{task.description}</p>
                                <div className='flex justify-between'>
                                    <span className='text-gray-600'>Creada: {task.createdAt}</span>
                                    <span>
                                        {task.done == 1 ? <span className="px-2 bg-green-200 rounded-2xl text-green-700">Completada</span> : <span className="px-2 bg-amber-200 rounded-2xl text-amber-700">Pendiente</span>}
                                    </span>
                                </div>
                                <div className="space-x-2 mt-10">
                                    <button
                                        //onClick={() => navigate(`/edit/${task.id}`)}
                                        className="bg-gray-800 text-white px-2 rounded-lg"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        // onClick={() => deleteTask(task.id)}
                                        className="border-2 border-gray-400 text-gray-800 px-2 rounded-lg"
                                    >
                                        Eliminar
                                    </button>
                                    <button
                                        //onClick={() => handleDone(task.id)}
                                        className="hover:underline"
                                    >
                                        {task.done == 1 ? "Tarea no completa" : "Tarea Completada" }
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    </>
  )
}

export default DemoTasks