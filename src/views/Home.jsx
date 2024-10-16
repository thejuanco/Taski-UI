import React from 'react'
import "material-symbols";
import { Link } from 'react-router-dom';
import NavBar from '../components/Home/NavBar'
import Characteristics from '../components/Home/Characteristics';

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <NavBar />
        <div className="space-y-48 mx-2">
          <div className="py-8 mt-16 mb-16">
            <h1 className="text-6xl text-center font-bold">
              Tu espacio de trabajo colaborativo.
            </h1>
            <h1 className="text-6xl text-center text-blue-600 font-bold">
              Todo en uno. Totalmente gratis.
            </h1>
            <p className="text-center mt-4 text-xl text-gray-500">
              Organiza tareas, colabora en tiempo real y potencia la
              productividad de
              <br /> tu equipo con Taski. Sin costos ocultos, sin límites.
            </p>

            <div className="flex justify-center mt-8 space-x-2">
              <Link
                to="/auth/signup"
                className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700 flex items-center transition hover:delay-150 duration-300 ease-in-out"
              >
                Comieza ahora
                <span className="material-symbols-rounded ml-2">
                  arrow_right_alt
                </span>
              </Link>
              <Link
                to="/dashboard"
                className="py-2 px-6 flex font-semibold items-center rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Ver demo
              </Link>
            </div>
          </div>
          {/*Componentes*/}
          <Characteristics />
        </div>
      </div>
    </>
  );
}

export default Home