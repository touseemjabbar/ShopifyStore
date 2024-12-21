import React from "react";

const FeatureSection = () => {
  const features = [
    {
      title: "Extend checkout",
      image:
        "https://cdn.shopify.com/b/shopify-brochure2-assets/d18b1ff1c3fc52ffc4c735129b88c00a.jpg?originalWidth=532&originalHeight=1230",
    },
    {
      title: "Create custom storefronts",
      image:
        "https://cdn.shopify.com/b/shopify-brochure2-assets/988b6738089b476b12bb11624047cbee.png?originalWidth=1200&originalHeight=778",
    },
    {
      title: "Build apps",
      image:
        "https://cdn.shopify.com/b/shopify-brochure2-assets/09c0d9df1ec115be7055d03fda7467c7.jpg?originalWidth=920&originalHeight=416",
    },
  ];

  return (
    <>
      <p className="text-[#538ae0] text-[30px] mt-10 sm:text-[25px] font-[400] text-center">
        By developers, for developers
      </p>
      <h2 className="text-center text-[30px] sm:text-[20px] font-[400]">
        APIs, primitives, and tools empower devs and partners to build the apps,
        <br /> themes, and custom storefronts businesses are looking for.
      </h2>

      <section className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="relative rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-shadow">
            <div
              className="mb-4 bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold text-center cursor-pointer inline-block hover:bg-white hover:text-black transition-colors"
            >
              Extend checkout
            </div>
            <img
              src={features[0].image}
              alt={features[0].title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
            />
          </div>

          <div className="relative rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-shadow">
            <div
              className="mb-4 bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold text-center cursor-pointer inline-block hover:bg-white hover:text-black transition-colors"
            >
              Create custom storefronts
            </div>
            <img
              src={features[1].image}
              alt={features[1].title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform"
            />
          </div>

          <div className="relative rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-shadow">
            <div
              className="mb-4 bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold text-center cursor-pointer inline-block hover:bg-white hover:text-black transition-colors"
            >
              Build apps
            </div>
            <img
              src={features[2].image}
              alt={features[2].title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
