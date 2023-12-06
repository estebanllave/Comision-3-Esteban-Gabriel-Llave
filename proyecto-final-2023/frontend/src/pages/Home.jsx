import { useEffect } from "react";
import { usePosts } from "./../context/PostContext";
import { PostCard } from "../components/PostCard";

// import NavbarPublic from "./../components/NavbarPublic";
import { Footer } from "../components/Footer";
import NavbarPrivate from "./../components/NavbarPrivate";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export const Home = () => {
  const { getAllPost, post } = usePosts();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getAllPost();
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center">
          <h2 className="text-4xl font-bold text-red-500">
            <div>Cargando...</div>
          </h2>
        </div>
      </>
    );
  }
  if (post.length === 0)
    return (
      <>
        <div className="flex items-center justify-center">
          <h2 className="text-4xl font-bold text-red-500">
            😢 ¡Oh no! No tienes posteos disponibles.
          </h2>
        </div>
      </>
    );

  return (
    <>
      {console.log(user)}
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
  );
};
