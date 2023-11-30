import { useEffect } from "react";
import { usePosts } from "./../context/PostContext";
import { PostCard } from "../components/PostCard";

import NavbarPublic from "./../components/NavbarPublic";
import { Footer } from "../components/Footer";
import NavbarPrivate from "./../components/NavbarPrivate";
import { useAuth } from "../context/AuthContext";

export const Home = () => {
  const { getAllPost, post } = usePosts();
  const {user} =  useAuth();
  // para traer las tareas cuando se ejecuta esta pagina
  useEffect(() => {
    getAllPost();
  }, []);

  if (post.length === 0)
  return user ? (
    <>
      <NavbarPrivate />
      <br />
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold text-indigo-700">
          🚀 ¡Descubre los Posteos!
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {post.map((post, i) => (
          <div key={i} className="min-w-[900px]">
            <PostCard post={post} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  ) : null;
  return (
    <>
      <NavbarPublic />
      <br />
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold text-indigo-700">
          🚀 ¡Descubre los Posteos!
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {post.map((post, i) => (
          <div key={i} className="min-w-[900px]">
            <PostCard post={post} />
          </div>
        ))}
      </div>
      <Footer />
      {/* <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold text-red-500">
          😢 ¡Oh no! No tienes posteos disponibles.
        </h1>
      </div> */}
    </>
  );
};
