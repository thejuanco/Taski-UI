import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../../components/Auth/NavBar'

const ForgotPassword = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center">
        <div className="w-1/4 mt-20">
          <h1 className="text-black font-semibold text-2xl">
            Colabora como nunca antes
          </h1>
          <h1 className="text-gray-500 text-2xl font-semibold ">
            Recupera tu contraseña
          </h1>
          <form className="mt-12 mb-4">
            <div className="space-y-2 mb-12 ">
              <label className="font-semibold" htmlFor="email">
                Correo electronico*
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-2 rounded-lg border"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <button className="bg-purple-800 mb-2 text-white w-full py-2 font-semibold rounded-lg hover:bg-purple-700">
              Continuar
            </button>
          </form>
          <p className="text-sm m-2 mb-4 text-gray-500">
              Te enviaremos un correo a tu cuenta de correo para 
              restablecer tu contraseña.
            </p>
          <div className="flex flex-row justify-center hover:underline">
            <Link to="/">Volver a inicio</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword