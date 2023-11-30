import NavbarPrivate from "../components/NavbarPrivate";
import { useForm } from "react-hook-form";
import { usePosts } from "../context/PostContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Footer } from "../components/Footer";

export const NewPost = () => {
  const { register, handleSubmit, setValue } = useForm();

  const { post, createPost, getPosById, updatePost } = usePosts();

  const { user } = useAuth();

  const params = useParams();
  useEffect(() => {
    async function loadPost() {
      if (params.id) {
        const taks = await getPosById(params.id);
        // setValue del useForm

        setValue("name", post.name);
        setValue("image", post.image);
        setValue("description", post.description);
      }
    }
    loadPost();
  }, []);

  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    // console.log(data);
    //A) esto es para probar para crear tarea
    // createTask(data);
    // navigate("/task");

    if (params.id) {
      updatePost(params.id, data);
    } else {
      // Agregar el ID del usuario al objeto de datos antes de crear el post
      const postData = { ...data, user: user.id };
      createPost(postData);
    }
    navigate("/post");
  });

  return (
    <>
      <NavbarPrivate />

      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white bg-opacity-65 p-5 rounded-md shadow-lg">
          <form onSubmit={onSubmit}>
            <div className="space-y-5">
              <div className="border-b border-gray-900/20 pb-5">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Crear Nuevo Posteo
                </h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Titulo
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                        <input
                          type="text"
                          name="titulo"
                          id="titulo"
                          autoComplete="titulo"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder=""
                          {...register("name")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Imagen
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                        <input
                          type="text"
                          name="image"
                          id="image"
                          autoComplete="image"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder=""
                          {...register("image")}
                        />
                        {/* <input
                          type="text"
                          name="user"
                          id="user"
                          autoComplete="user"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder=""
                          {...register("user",)}
                        /> */}
                      </div>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Descripcion
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        {...register("description")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};
