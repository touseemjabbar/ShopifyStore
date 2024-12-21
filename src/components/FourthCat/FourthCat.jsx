import React from "react";

const FourthCat = () => {
  return (
    <div className="bg-black text-white py-12 px-6">
      <h2 className="text-white mt-2 text-[40px] md:text-[30px] text-center">
        Start selling in no time
      </h2>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between mt-10 gap-8">
        <div className="flex lg:flex-row flex-col gap-4 flex-1">
          <img
            src="/laptop.webp"
            alt="Image 1"
            className="rounded-lg w-full lg:w-1/2 object-cover"
          />
          <img
            src="/aunty.webp"
            alt="Image 2"
            className="rounded-lg w-full lg:w-1/2 object-cover"
          />
        </div>

        
        <div className="flex flex-col gap-6 flex-1 text-left">
          <div className="flex items-start">
            <span className="text-green-500 text-[20px] font-bold">01</span>
            <div className="ml-4">
              <p className="text-lg font-semibold">Add your first product</p>
              <hr className="border-white mt-2" />
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-green-500 text-[20px] font-bold">02</span>
            <div className="ml-4">
              <p className="text-lg font-semibold">Customize your store</p>
              <hr className="border-white mt-2" />
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-green-500 text-[20px] font-bold">03</span>
            <div className="ml-4">
              <p className="text-lg font-semibold">Set up payments</p>
              <hr className="border-white mt-2" />
            </div>
          </div>

          <button className="bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors self-start">
            Take your shot
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourthCat;
