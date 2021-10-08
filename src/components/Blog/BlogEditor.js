import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function BlogEditor() {
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
        title: "Your Blog has been Published!",
        text: "",
        icon: "success",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
      axios
        .post("https://myways-backend.herokuapp.com/api/createBlog", {
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
            title: "Registration Failed",
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
        <form className="mt-6">
          <label
            for="title"
            className="title"
          >
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
          <label
            for="Image"
            className="title"
          >
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
          <label
            for="Blog"
            className="texts"
          >
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
          <button
            type="submit"
            onClick={onSubmit}
            className="buttons1"
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
