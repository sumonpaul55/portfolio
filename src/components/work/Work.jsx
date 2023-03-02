import React from "react";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full justify-center">
        <div className="pb-8">
          <p className="text-4xl inline border-b-4 border-pink-600 font-bold">Work</p>
          <p className="my-6">// Checkout Some of my Recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="shadow-lg shadow-[#040c16] group flex rounded-md justify-center items-center mx-auto contenct-div">
            <div>
              <span></span>
              <div>
                <a href="/">
                  <button>butto</button>
                </a>
                <a href="/">
                  <button>butto</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
