
import { CommentForm } from "../components/CommentForm";




export const PostCard = ({ post }) => {

  return (
    <div className="py-10 sm:py-16">
      {/* ... (resto del código) */}
      <div className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 ">
          <div className="mx-auto mt-8 grid max-w-1xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            
            <article
            
              key={post.id}
              className="flex flex-col items-start max-w-sm bg-white bg-opacity-80 rounded-md overflow-hidden shadow-lg"
            >

              
              <div className="group relative ">
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-60 object-cover rounded-md"
                />
                
              </div>
              
              <div className="relative mt-3">
                
                <p className="text-sm leading-6 text-gray-700 px-2">
                  <strong>{post.name}: </strong>
                  {post.description}
                </p>
              </div>
              
              <div className="mt-3 flex items-center gap-x-2">
                <div className="text-xs leading-5">
                  <p className="font-semibold text-gray-900">Comentarios:</p>
                  {/* Renderizar comentarios aquí */}
                  {post.comments.map((comment, i) => (
                    <div key={i} className="mb-3">
                      <p className="text-sm font-semibold text-gray-900">
                       De: {}
                      </p>
                      <p className="text-sm text-gray-700">
                        {comment.description}
                      </p>
                      {/* <p className="text-xs text-gray-500">{formatDate(comment.date)}</p> */}
                    </div>
                  ))}
                </div>
              </div>
              {/* Formulario de Comentario */}
              <CommentForm postId={post} />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
