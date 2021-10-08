import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

export default function BlogPage() {
  const [likesCount, setLikesCount] = React.useState(0);
  const [comment, setComment] = React.useState("");
  const [blogList, setBloglist] = React.useState([]);

  let { id } = useParams();
  React.useEffect(() => {
    axios
      .get(`https://myways-backend.herokuapp.com/api/getblog/${id}`)
      .then((response) => {
        setBloglist(response.data);
        return blogList;
      })
      .catch((error) => {
        console.log(error);
      });
  }, [blogList, id]);

  const HandleComment=()=>{
      setComment("");
            axios.put(
              `https://myways-backend.herokuapp.com/api/blog/comment/${id}`,
              {comment:comment }
            );
            
  }
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-16 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-10 font-medium text-gray-900">
              {blogList.title}
            </h1>
            <img
              className="lg:w-4/6 md:w-4/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src={blogList.image}
            />

            <p className="mb-8 mt-10 leading-relaxed">{blogList.content}</p>
          </div>
          <div className="flex flex-wrap justify-evenly">
            <div>
              <button
                onClick={() => {
                  if (likesCount < 1) {
                    setLikesCount(likesCount + 1);
                    //update api using axios to store likesCount
                    axios.put(
                      `https://myways-backend.herokuapp.com/api/blog/likes/${id}`,
                      { likesCount: likesCount }
                    );
                  }
                }}
                className="bg-transparent mx-4 mt-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                ({likesCount}) Like 👍
              </button>
            </div>
            <div>
              <button onClick={HandleComment} className="bg-transparent mx-4 mt-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Comment
              </button>
            </div>
          </div>
          <textarea
            id="comment"
            type="Image"
            name="comment"
            placeholder="Enter your comment"
            autocomplete="new-Image"
            onChange={(e) =>setComment(e.target.value)}
            className="block resize-none border-2 w-1/2 h-40 p-3 mt-2 text-gray-900  appearance-none focus:outline-none focus:bg-gray-100 focus:shadow-inner"
            required
          />
        </div>
      </section>
      <div className="bg-gray-500 px-4 py-5 border-b rounded-t sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-white">
          Top comments
        </h3>
      </div>
      <Comment />
    </div>
  );
}
