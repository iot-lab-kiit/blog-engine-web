import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./blog.css";

export default function EditBlog() {
  //onchange function for title, image, content
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      swal({
        title: "Please fill all required fields",
        text: "",
        icon: "warning",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
    } else {
      swal({
        title: "Your Blog has been updated!",
        text: "",
        icon: "success",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
      axios
        .put("https://blog-backend-iot.herokuapp.com/api/blog", {
          title: title,
          image: image,
          content: content,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data) {
            //redirect to login page
            history.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
          swal({
            title: "Uodate Failed",
            text: "",
            icon: "error",
            buttons: {
              confirm: { text: "Okay", className: "sweet-warning" },
            },
          });
        });
    }
  };
  const onDelete = (e) => {
    e.preventDefault();
    if (!title) {
      swal({
        title: "Please fill the title of the blog",
        text: "",
        icon: "warning",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
    } else {
      swal({
        title: "Your Blog has been updated!",
        text: "",
        icon: "success",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
      axios
        .delete("https://blog-backend-iot.herokuapp.com/api/deleteblog", {
          title: title,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data) {
            //redirect to login page
            history.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
          swal({
            title: "Update Failed",
            text: "",
            icon: "error",
            buttons: {
              confirm: { text: "Okay", className: "sweet-warning" },
            },
          });
        });
    }
  };
  return (
    <div className="edit-blog">
      <div className="form">
        <p className="text-center">
          Please Type the full title of the blog for updation
        </p>
        <form style={{ marginTop: "1.5rem" }}>
          <label for="title" className="texts">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Blog Title"
            autocomplete="title"
            onChange={(e) => setTitle(e.target.value)}
            className="input"
            required
          />
          <label for="Image" className="texts">
            Image
          </label>
          <input
            id="Image"
            type="text"
            name="Image"
            placeholder="Image Link"
            autocomplete="new-Image"
            className="image1"
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <label for="Blog" className="texts">
            Blog Content
          </label>
          <textarea
            id="Blog"
            type="Image"
            name="Blog"
            placeholder="Enter your Blog"
            autocomplete="new-Image"
            onChange={(e) => setContent(e.target.value)}
            className="text-area"
            required
          />
          <div className="flex flex-wrap justify-evenly">
            <div>
              <button type="submit" onClick={onSubmit} className="buttons1">
                Update
              </button>
            </div>
            <div>
              <button type="submit" onClick={onDelete} className="buttons2">
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
