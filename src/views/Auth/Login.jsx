import React from 'react'
import NavBar from '../../components/Auth/NavBar'

const Login = () => {
  return (
    <>
        <div>
            <NavBar />
            <div className='flex justify-center items center'>
                <div className='mt-16 w-1/4'>
                    <h1 className="text-black font-semibold text-2xl">
                        Colabora como nunca antes
                    </h1>
                    <h1 className="text-gray-500 text-2xl font-semibold ">
                        Inicia Sesión en Taski
                    </h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login