import React, { useState } from "react";

const Electronic = ({ electronicItem, handleGetElectronic }) => {
  const [addCart, setAddCart] = useState(false);
  const addToCart = () => {
    setAddCart(true);
    handleGetElectronic(electronicItem);
  };
  return (
    <div>
      {/* <!-- Product Grid --> */}
      <div>
        <div className="bg-white p-4 rounded-lg shadow-md" v-for="i in 6">
          <img
            className="object-cover h-28 justify-center mx-auto "
            src={electronicItem.image}
            alt=""
          />
          <h2 className="mt-4 text-lg font-semibold">
            Title: {electronicItem.title}
          </h2>
          <p className="text-gray-600">Price: {electronicItem.price}k</p>
          <div className="gap-4 flex">
            <button className="mt-2 px-4 py-2 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition cursor-pointer">
              View Details
            </button>
            <button
              onClick={addToCart}
              className="mt-2 px-4 py-2 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition cursor-pointer"
              disabled={addCart}>
              {addCart ? "Cart Added" : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electronic;
