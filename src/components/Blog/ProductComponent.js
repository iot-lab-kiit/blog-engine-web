import React from "react";
import { Link } from "react-router-dom";
function ProductComponent({ product }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl bg-white">
        <Link to={`/blog/${product._id}`} onClick={scrollToTop}>
          <img
            className=" w-full object-cover object-center"
            src={product.image}
            alt="Product"
          />

          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-3">
              {product.title}
            </h1>
            <p className="leading-relaxed mb-3 text-black">
              {product.content.length < 50
                ? product.content
                : product.content.substring(0, 49)}
              .....
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProductComponent;
