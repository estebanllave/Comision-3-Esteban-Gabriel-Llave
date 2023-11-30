import { useEffect } from "react";
import NavbarPrivate from "../components/NavbarPrivate";
import { usePosts } from "./../context/PostContext";
import { PostCardPrivate } from "../components/PostCardPrivate";
import { useAuth } from "../context/AuthContext";
import { Footer } from "../components/Footer";


export const Post = () => {
  const { user } = useAuth();
  // console.log(user.id);
  const { post, getAllPost, deletePost } = usePosts();

  // Verificar que user tenga un valor antes de usarlo
  useEffect(() => {
    getAllPost();
  }, []);
  console.log(post);
  const userPosts = post.filter((post) => post.user === user.id);
  console.log(userPosts);

  if (userPosts.length === 0)
    return (
      <>
        <NavbarPrivate />
        <div className="flex items-center justify-center">
  <h1 className="text-4xl font-bold text-gray-600">
    🌧 ¡Oh no! Parece que no tienes posteos disponibles.
  </h1>
</div>
      </>
    );

  return (
    <>
      <NavbarPrivate />
      <br />
      <div className="flex items-center justify-center">
  <h1 className="text-4xl font-bold text-indigo-700">¡Descubre Tus Posteos!</h1>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {userPosts.map((userPosts, i) => (
          <div key={i} className="min-w-[900px]">
            <PostCardPrivate post={userPosts} />
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};
