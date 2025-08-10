
import { useLoaderData } from "react-router";


const Blog = () => {

const data = useLoaderData();


  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      { data.map((story) => (
        <div
          key={story._id}
          className="bg-white rounded-2xl shadow-md p-5 border border-gray-200"
        >
          <div className="flex items-center mb-3">
            <div className="bg-red-300 h-10 w-10 rounded-full mr-3" />
            <div>
              <h2 className="text-lg font-semibold">
                {story.username || story.email}
              </h2>
              <p className="text-sm text-gray-500">
                {new Date(story.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold pb-4">{story.title}</h2>
            {story.imageUrls && (
              <img
                src={story.imageUrls[0]}
                alt="Story"
                className="mt-4 rounded-lg max-h-96 object-cover w-full"
              />
            )}
            <p className="text-gray-800 whitespace-pre-line py-12">
              {story.content}
            </p>
            {story.imageUrls && (
              <img
                src={story.imageUrls[1]}
                alt="Story"
                className="mt-4 rounded-lg max-h-96 object-cover w-full"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};


export default Blog;
