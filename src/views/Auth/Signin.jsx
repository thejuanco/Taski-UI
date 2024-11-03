import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Auth/NavBar";
import { useForm } from "react-hook-form";

const Signin = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <>
      <div>
        <NavBar />
        <div className="flex justify-center items center">
          <div className="mt-12 w-1/4">
            <div className="flex justify-center items-center hover:blur-xs">
              <div className="bg-blue-300 w-4/5 mb-3 py-1 text-center rounded-3xl flex flex-row space-x-2" id="addNewUi">
                <div className="bg-blue-700 rounded-3xl px-1 ml-1">
                  <p className="text-sm text-blue-200">Nuevo</p>
                </div>
                  <p className="text-blue-700 text-sm font-semibold">Espera pronto nuestro nuevo diseño</p>
              </div>
            </div>
            <h1 className="text-black font-semibold text-2xl">
              Colabora como nunca antes
            </h1>
            <h1 className="text-gray-500 text-2xl font-semibold ">
              Inicia Sesión en Taski
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 mb-6">
              <div className="space-y-4">
              <div className="space-y-2">
                  <label className="font-semibold" htmlFor="name">
                    Nombre*
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="w-full p-2 rounded-lg border"
                    placeholder="Tu nombre"
                    {...register('name', {required: true})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-semibold" htmlFor="lastName">
                    Apellido*
                  </label>
                  <input
                    className="w-full p-2 rounded-lg border"
                    placeholder="Ingresa tu apellido"
                    {...register('lastName', {required: true})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-semibold" htmlFor="email">
                    Correo Electronico*
                  </label>
                  <input
                    className="w-full p-2 rounded-lg border"
                    placeholder="Ingresa tu correo"
                    {...register('email', {required: true})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-semibold" htmlFor="password">
                    Contraseña*
                  </label>
                  <input
                    className="w-full p-2 rounded-lg border"
                    placeholder="***********"
                    type="password"
                    {...register('password', {required: true})}
                  />
                </div>
              </div>
              <button className="bg-purple-800 text-white w-full mt-8 py-2 font-semibold rounded-lg hover:bg-purple-700">
                Continuar
              </button>
            </form>
            {/* <div className="flex flex-row justify-between">
              <Link to="/auth/signin    ">¿Ya tienes una cuenta?</Link>
            </div>
            <div className="flex items-center justify-between mb-6 mt-6">
              <div className="border-t border-gray-300 w-1/2"></div>
              <span className="text-gray-800 mx-3">O</span>
              <div className="border-t border-gray-300 w-1/2"></div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
