import {useForm} from "react-hook-form"
import { Link } from "react-router-dom";
import {useAuth} from "../context/AuthContext"
// para re dirigir una vez logeado
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
import NavbarPublic from "../components/NavbarPublic";
import { Footer } from "../components/Footer";


export const Login = () =>{

    const {register,handleSubmit, formState:{errors}} = useForm();

    const {signin,isAuth, errors:loginErrors} = useAuth()

        // edecto para redirigir a Post uso el isAuth 
        const navigate = useNavigate()
        useEffect(()=>{
            if(isAuth) navigate("/")
        },[isAuth])



    const onSumit = handleSubmit(async (values) =>{
        console.log("desde onSumit",values);
        signin(values)
    } )

        return (
          <>
          <NavbarPublic/>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              {/* <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              /> */}
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
               Logearse
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    {
                    loginErrors.map((err,i)=>(
                        <div className="text-red-500"  key={i}>{err}</div>
                        ))
                        }
                    <input
                      id="email"
                    //   name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    //   hago la validacion
                      {...register("email",{required: true})}
                    />
                  </div>
                </div>
                {errors.email && (
                <p className="text-red-400">Email requerido</p>)}
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                    //   name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...register("password",{required: true})}
                    />
                  </div>
                </div>
                {errors.password && (
                <p className="text-red-400">Password requerido</p>)}
                <div>
                  <button
                    onClick={onSumit}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    logearse
                  </button>
                </div>
              </form>
              <p className="mt-10 text-center text-sm text-gray-500">
                No una cuenta?<Link to="/register" className= "font-semibold text-indigo-600 hover:text-indigo-500"  > Registrate </Link>
              </p>

            </div>
          </div>
          <Footer/>
          </>
        )



} 