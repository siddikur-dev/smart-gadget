import React, { use } from "react";
import Electronic from "./electronic";

const Electronics = ({ fetchPromise }) => {
  const fetchPromiseUse = use(fetchPromise);
  // console.log(fetchPromiseUse);

  return (
    <div>
      <h3 className="mx-auto p-10 font-bold text-center">
        All Electronic Item: {fetchPromiseUse.length}
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <div className="grid grid-cols-1 col-span-1">
          <h3>HIstiry</h3>
        </div>
        <div className="grid grid-cols-3 col-span-3">
          {fetchPromiseUse.map((electronicItem) => (
            <Electronic
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
