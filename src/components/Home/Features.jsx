import React from 'react'
import "material-symbols";
import { Link } from 'react-router-dom'

const Features = () => {
  return (
    <>
        <div className='mx-4 h-auto'>
            <div className='grid grid-cols-2 space-x-6'>
                <div className='bg-gray-800 rounded-xl h-full flex items-center justify-center flex-col hover:shadow-md'>
                    <h1 className='text-4xl mt-2 mx-2 text-neutral-100 p-2'>
                        Conoce sobre nosotros
                    </h1>
                    <img src="img/working_re.svg" alt="Imagen productiva" className='w-96 h-96'/>
                    <Link
                        to="/aboutUs" 
                        className='bg-neutral-100 font-semibold rounded-xl px-6 py-3 mx-4 hover:bg-neutral-200 flex items-center justify-center'>
                        Todos los productos
                        <span className="material-symbols-rounded ml-2">
                            arrow_right_alt
                        </span>
                    </Link>
                </div>
                <div className='bg-slate-200 rounded-xl p-4 hover:shadow-md'>
                    <div className='flex flex-row justify-between items-center mx-4'>
                        <h1 className='text-3xl text-gray-800 font-semibold'>Visita nuestro blog</h1>
                        <Link
                            to="/blog" 
                            className='flex items-center justify-center rounded-full bg-white w-10 h-10 hover:shadow-md'>
                            <span className="material-symbols-rounded text-gray-800">
                                chevron_right
                            </span>
                        </Link>
                    </div> 
                    <img src='img/blog.svg' alt='Blog' className='mt-4'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Features