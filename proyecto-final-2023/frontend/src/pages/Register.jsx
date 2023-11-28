// instalo e importo este hook
import { useForm } from "react-hook-form";
// traigo useAuth para pasarlo
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import NavbarPublic from "../components/NavbarPublic";
// import {registerReq} from "../api/auth.js"

export const Register = () => {
  // traigo las funciones que vienen con el useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, errors: loginErrors } = useAuth();

  const onSumit = handleSubmit(async (values) => {
    // conexion al servidor y a la DB
    // console.log(values);
    // const res = await registerReq(values)
    // console.log(res);
    signup(values);
  });

  return (
    <>
      <NavbarPublic />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registrate
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                User name
              </label>
              <div className="mt-2">
                {loginErrors.map((err, i) => (
                  <div className="text-red-500" key={i}>
                    {err}
                  </div>
                ))}
                <input
                  id="name"
                  //   name="username"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("username", { required: true })}
                />
              </div>
            </div>
            {errors.username && (
              <p className="text-red-400">Username requerido</p>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  //   name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  //   hago la validacion
                  {...register("email", { required: true })}
                />
              </div>
            </div>
            {errors.email && <p className="text-red-400">Email requerido</p>}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  //   name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("password", { required: true })}
                />
              </div>
            </div>
            {errors.password && (
              <p className="text-red-400">Password requerido</p>
            )}
            <div>
              <button
                onClick={onSumit}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registrarse
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            tienes una cuenta?
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              login{" "}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
