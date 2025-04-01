import React from "react";

const Nav = () => {
  return (
    <div>
      <header className="bg-purple-600 text-white p-5 rounded-2xl relative  mx-auto xl:w-[1300px]  mt-2">
        <section>
            {/* Nav */}
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-xl font-bold"> Smart Gadget Shop </h1>
            <nav className="mt-3 md:mt-0">
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center">
                <li>
                  <a href="#" className=" underline hover:no-underline font-bold">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:font-bold ">
                    Statistics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:font-bold">
                    Dashboard
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!-- cart and whitelist icon --> */}
            <div className="flex space-x-4 mt-3 md:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>
          {/*Hero Body  */}
          <div className="bg-purple-600 text-white text-center py-16 px-5 rounded-b-2xl relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h2>
            <p className="mt-3 text-sm md:text-base">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="mt-5 bg-white text-purple-600 px-6 py-2 rounded-full font-semibold cursor-pointer">
              Shop Now
            </button>
          </div>
        </section>
      </header>
      {/*  */}
      <div className="max-w-4xl mx-auto -mt-16 relative z-20 px-5">
        <img src="./src/assets/banner.jpg" alt="Banner-Image" />
      </div>
      {/* Explore Cutting-Edge Gadget */}
      <main className="pt-14">
        <h2 className="mx-auto font-bold text-center text-4xl pb-3">
          Explore Cutting-Edge Gadgets
        </h2>
      </main>
    </div>
  );
};

export default Nav;
