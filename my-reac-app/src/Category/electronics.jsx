import React, { use, useState } from "react";
import Electronic from "./electronic";

const Electronics = ({ fetchPromise }) => {
  const fetchPromiseUse = use(fetchPromise);
  console.log(fetchPromiseUse);
  const [getElectronic, setGetElectronic] = useState([]);
  const handleGetElectronic = (electronicItem) => {
    const newGetElectronic = [...getElectronic, electronicItem];
    setGetElectronic(newGetElectronic);
  };
  // history celar
  const handleClearElectronic = () => {
    setGetElectronic([]);
  };
  //
  const handleRemoveElectronic = (id) => {
    const updatedElectronics = getElectronic.filter((item) => item.id !== id);
    setGetElectronic(updatedElectronics);
  };

  return (
    <div>
      <h3 className="mx-auto p-10 font-bold text-center">
        All Electronic Item: {fetchPromiseUse.length}
      </h3>

      <div className="flex flex-col md:flex-row  container mx-auto justify-center gap-5">
        {/* Aside */}
        <div className=" bg-[#ddd]  grid-cols-1 w-1/3 p-4 rounded-lg shadow-md">
          <h3 className="font-bold  hover:bg-purple-500 hover:text-white border  border-purple-500 text-purple-500 p-2 rounded-lg">
            {" "}
            Cart History: {getElectronic.length}
          </h3>
          <button
            className="mt-2 px-4 py-2 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition cursor-pointer mb-2"
            onClick={handleClearElectronic}
          >
            Clear History
          </button>
          {/* Clear History Cart */}

          {getElectronic.map((electro) => (
            <div className="border-2 border-indigo-600 rounded-md p-2  mb-4">
              <img className="w-12" src={electro.image} alt="" />
              <h1>
                Rating:{" "}
                <div class="rating rating-xs">
                  <input
                    type="radio"
                    name="rating-5"
                    class="mask mask-star-2 bg-orange-400"
                    aria-label="1 star"
                  />
                </div>
                {electro.rating.rate}
              </h1>
              <h1>Price: ${electro.price}</h1>
              <h1>Cate: {electro.category}</h1>
              <h2
                className="items-center cursor-pointer"
                onClick={() => handleRemoveElectronic(electro.id)}
              >
                X
              </h2>
            </div>
          ))}
        </div>
        {/* 3 Column Layout */}
        <div className=" bg-[#ddd] p-5 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 gap-5  ">
          {fetchPromiseUse.map((electronicItem) => (
            <Electronic
              handleGetElectronic={handleGetElectronic}
              key={electronicItem.id}
              electronicItem={electronicItem}
            ></Electronic>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Electronics;
