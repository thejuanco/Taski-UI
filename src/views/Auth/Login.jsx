import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../../components/Auth/NavBar'

const Login = () => {
  return (
    <>
      <div>
        <NavBar />
        <div className="flex justify-center items center">
          <div className="mt-16 w-1/4">
            <h1 className="text-black font-semibold text-2xl">
              Colabora como nunca antes
            </h1>
            <h1 className="text-gray-500 text-2xl font-semibold ">
              Inicia Sesión en Taski
            </h1>
            <form className="mt-10 mb-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="font-semibold" htmlFor="email">
                    Correo Electronico*
                  </label>
                  <input
                    className="w-full p-2 rounded-lg border"
                    placeholder="Ingresa tu apellido"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-semibold" htmlFor="email">
                    Contraseña*
                  </label>
                  <input
                    className="w-full p-2 rounded-lg border"
                    placeholder="Ingresa tu apellido"
                  />
                </div>
              </div>
              <button className="bg-purple-800 text-white w-full mt-8 py-2 font-semibold rounded-lg hover:bg-purple-700">
                Continuar
              </button>
            </form>
            <div className="flex flex-row justify-between">
              <Link to="/auth/signup">¿No tienes una cuenta?</Link>
              <Link to="/auth/forgot-password">Olvide mi contraseña</Link>
            </div>
            <div className="flex items-center justify-between mb-6 mt-6">
              <div className="border-t border-gray-300 w-1/2"></div>
              <span className="text-gray-800 mx-3">O</span>
              <div className="border-t border-gray-300 w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login