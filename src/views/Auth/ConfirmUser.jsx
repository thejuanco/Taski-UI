import React from 'react'
import { Link } from 'react-router-dom'
import "material-symbols";

const ConfirmUser = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="md:w-1/3 sm:w-1/2 mx-6">
          <div className="flex justify-center bg-white items-center flex-col p-6 rounded-lg shadow-lg">
            <img src="/img/comprobado.png" alt="correo" className="w-20 h-20" />
            <h1 className="text-center font-bold text-3xl my-4">
              ¡Cuenta Verificada!
            </h1>
            <p className="text-center text-gray-500">
            Hemos verificado tu cuenta exitosamente. Gracias por unirte a Taski. Ahora puedes comenzar a organizar tus proyectos y aumentar tu productividad.
            </p>
            <div className='border border-blue-400 rounded-lg w-full bg-blue-50 p-3 mt-4 '>
                <p className='font-semibold text-blue-700 mb-2'>Próximos pasos:</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Completa tu perfil</li>
                    <li>Crea tu primer proyecto</li>
                    <li>Invita a tus compañeros de equipo</li>
                </ul>
            </div>
            <Link
              to="/auth/singin"
              className="bg-gray-900 text-white py-2 w-full justify-center px-6 rounded-lg hover:bg-gray-800 mt-10 flex items-center"
            >
              Ir a inicio
                <span className="material-symbols-rounded ml-2">
                    arrow_right_alt
                </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmUser