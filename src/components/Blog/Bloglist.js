import React, { useEffect, useState } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";

import "./blog.css"

function Bloglist() {
  //axios to get the Blog
  const [blogList, setBloglist] = useState([]);
  useEffect(() => {
    axios
      .get("https://myways-backend.herokuapp.com/api/getblogs")
      .then((response) => {
        setBloglist(response.data);
        return blogList;
      })
      .catch((error) => {
        console.log(error);
      });
  }, [blogList]);

  return (
    <div>
      <div>
        <h1 className="our-blogs">
          Our blogs
        </h1>
        <div className="blogs">
          {blogList.map((blog) => (
            <ProductComponent key={blog._id} product={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bloglist;
