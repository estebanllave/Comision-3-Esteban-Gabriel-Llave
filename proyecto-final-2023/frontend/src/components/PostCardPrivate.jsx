import { Link } from "react-router-dom";
import { usePosts } from "../context/PostContext";

export const PostCardPrivate = ({post}) =>{
   
    const {deletePost} = usePosts()

    return(
        <>
  <div className=" py-10 sm:py-16">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {/* <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{post.name}</h2>
      </div> */}
      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {/* {post.map((post) => ( */}
          <article key={post.id} className="flex flex-col items-start max-w-sm bg-white bg-opacity-80 rounded-md overflow-hidden shadow-lg">
            <div className="group relative mt-2">
              <img src={post.image} alt="" className="w-full h-60 object-cover rounded-md" />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-4 bg-gray-900 bg-opacity-80">
                <p className="line-clamp-3 text-sm leading-6 text-gray-200">{post.name}</p>
              </div>
            </div>
            <div className="relative mt-3 flex items-center gap-x-2">
              {/* <img src={post.author.avatar} alt="" className="h-8 w-8 rounded-full bg-gray-50" /> */}
              <div className="text-xs leading-5">
                <p className="font-semibold text-gray-900">
                  
                    <span className="absolute inset-0" />
                    {post.description}
                  
                </p>
              </div>
            </div>
            <div className="flex gap-x-2 items-center">
  <button
    onClick={() => {
      deletePost(post._id);
    }}
    className="bg-red-400 text-white px-4 py-2 rounded-md"
  >
    Eliminar
  </button>
  <Link
    to={`/postupdate/${post._id}`}
    className="bg-green-400 text-white px-4 py-2 rounded-md"
  >
    Editar
  </Link>
</div>
          </article>
        {/* ))} */}
      </div>
    </div>
  </div>
</>

    )
}