import React from "react";
import {Link} from "react-router-dom";

export default function CreateBlog() {
  return (
    <div>
      <div className="mx-5 mt-40 flex flex-wrap  place-content-center">
        <div className="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
          <h2 className="font-semibold text-2xl mb-6">Edit Blog</h2>
          <img
            className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
            src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Create"
          />
          <br />
          <br />
          <Link to="/edit">
            <button className="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-xl text-white pt-2 pb-2 px-6 inline">
              Edit Blog!
            </button>
          </Link>
        </div>
        <div className="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
          <h2 className="font-semibold text-2xl mb-6">Write Blog</h2>
          <img
            className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
            src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Create"
          />
          <br />
          <br />
          <Link to="/blog/create">
            <button className="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-xl text-white pt-2 pb-2 px-6 inline">
              Create Blog!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
