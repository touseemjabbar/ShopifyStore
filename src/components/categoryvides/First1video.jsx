import React from 'react'

const First1video = () => {
    return (
        <>
            <p className="text-[20px] font-[400] text-[#538ae0] sm:text-[24px] md:text-[28px] lg:text-[32px]">
                Direct and wholesale
            </p>
            <h2 className="text-[50px] font-[500] sm:text-[40px] md:text-[45px] lg:text-[50px]">
                Find your forever customers
            </h2>

            <div className="min-h-screen w-full flex items-center justify-center px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-[90%]">
                    <div className="bg-[#0F2D35] p-6 rounded-lg shadow-lg flex items-center justify-center relative">
                        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px]">
                            <video
                                autoPlay
                                loop
                                muted
                                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                            >
                                <source
                                    src="/thirdvideo.webm"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className="absolute bottom-0 w-full text-center px-4 sm:px-6 py-4 hidden md:block">
                            <p className="text-white text-sm sm:text-lg md:text-xl leading-relaxed">
                                <span className="text-[18px] sm:text-[22px] font-semibold block">Reach the right customers for less</span>
                                <span className="block mt-0 text-xs sm:text-sm md:text-base font-light">
                                    Cut acquisition costs as much as 50% with Shopify Audiences and keep them coming back with integrated marketing tools and insightful analytics.
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#0F2D35] p-6 rounded-lg shadow-lg flex flex-col items-center">

                        <div className="relative w-full h-[300px] sm:h-[400px]">
                            <video
                                autoPlay
                                loop
                                muted
                                className="w-full h-full object-cover rounded-lg"
                            >
                                <source src="https://cdn.shopify.com/b/shopify-brochure2-assets/7c402b92b0465da1e70a15053b98f553.webm" type="video/mp4" />
                            </video>
                        </div>

                        <div className="mt-4 text-center">
                            <p className="text-white text-sm sm:text-base">
                                <span className='text-[20px] font-[600]' > Unlock new growth with B2B</span> <br />
                                Create custom experiences for wholesale buyers with flexible pricing, discounts, and payment terms.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default First1video
