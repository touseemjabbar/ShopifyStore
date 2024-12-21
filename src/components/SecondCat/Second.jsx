import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Video2Background from '../seconVideo';
import First1video from '../categoryvides/FirstVideo';
import ImageVideoContainer from '../categoryvides/SecondVideo';
import FeatureSection from '../ThirdCat/ThirdCat';
import FourthCat from '../FourthCat/FourthCat';
import Footer from '../Footer/Footer';
import FirstVideo from '../categoryvides/FirstVideo';
import FirstCatVideo from '../categoryvides/FirstVideo';


const SecondCat = () => {
    return (
        <div className='bg-black py-10 px-6 sm:px-20 rounded-sm text-white'>
            <h1 className='text-[32px] sm:text-[54px] font-[500] leading-tight'>
                The one commerce platform behind it all
            </h1>
            <h2 className='text-[20px] sm:text-[40px] font-[300] mt-4 sm:mt-6'>
                Sell online and in person. Sell locally and globally. Sell direct
                <br /> and wholesale. Sell on desktop and mobile.
            </h2>
            <div className='mt-10'>
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="group relative">
                            <img
                                src="https://cdn.shopify.com/b/shopify-brochure2-assets/c65bc0c2daf1df2c109d1f9c14444a57.webp?originalWidth=1045&originalHeight=800"
                                alt="Glossier"
                                className="w-full object-cover rounded-lg transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-[#0f1112] flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 text-[25px] sm:text-[40px] lg:text-[50px] font-[600] text-white font-robotoMono">
                                Glossier.
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="group relative">
                            <img
                                src="https://cdn.shopify.com/b/shopify-brochure2-assets/afdceeca27acf0af45372d782b36a153.webp?originalWidth=1032&originalHeight=800"
                                alt="Rowing Blazers"
                                className="w-full rounded-lg h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#0f1112] flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 text-[20px] sm:text-[35px] lg:text-[45px] font-[600] text-white font-robotoMono">
                                Rowing<br />Blazers.
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="group relative">
                            <img
                                src="https://cdn.shopify.com/b/shopify-brochure2-assets/92b0585e60e00efb6ceaf2aec6a66027.webp?originalWidth=1046&originalHeight=800"
                                alt="Vacation"
                                className="w-full rounded-lg h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#0f1112] flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 text-[25px] sm:text-[45px] lg:text-[55px] font-[600] text-white font-robotoMono">
                                Vacation.
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="group relative">
                            <img
                                src="https://cdn.shopify.com/b/shopify-brochure2-assets/f11495397635517ec5ee47c2b360dd04.webp?originalWidth=1032&originalHeight=800"
                                alt="Super Small"
                                className="w-full rounded-lg h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#0f1112] flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 text-[25px] sm:text-[45px] lg:text-[55px] font-[600] text-white font-robotoMono">
                                Super<br />Small
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="group relative">
                            <img
                                src="https://cdn.shopify.com/b/shopify-brochure2-assets/268717f14ffc87467a9aeb1e6f5a7719.webp?originalWidth=1046&originalHeight=800"
                                alt="KitAce"
                                className="w-full rounded-lg h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#0f1112] flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 text-[25px] sm:text-[45px] lg:text-[55px] font-[600] text-white font-robotoMono">
                                KitAce
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='mt-20 mb-5 flex flex-col sm:flex-row items-center sm:items-start'>
                <h1 className='text-[32px] sm:text-[50px] font-[500] text-center sm:text-left'>
                    For everyone from entrepreneurs to enterprise
                </h1>
                <span className='mt-6 sm:mt-0 sm:ml-20 text-center sm:text-left'>
                    Millions of merchants of every size have collectively made over $1,000,000,000,000 in sales on Shopify.
                </span>
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-5'>

                <div className="w-full sm:w-[40%] relative">
                    <img
                        src="https://cdn.shopify.com/b/shopify-brochure2-assets/4ce35eba1e546a23ff875c3eba8b5705.jpg?originalWidth=914&originalHeight=600"
                        className="rounded-lg w-full"
                        alt=""
                    />
                    <img
                        src="https://cdn.shopify.com/b/shopify-brochure2-assets/ac93cea21424238e2231f2e0009da62e.jpg?originalWidth=914&originalHeight=600&width=800"
                        className="absolute inset-0 w-full object-cover rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100"
                        alt=""
                    />
                    <h1 className='text-[20px] sm:text-[25px] font-[600] mt-4'>Get started fast</h1>
                    <p className="text-[14px] sm:text-[16px]">Solo seller Megan Bre Camp started Summer Solace Tallow to sell her organic candles and skincare online and at local farmers markets.</p>
                </div>

                <div className="w-full sm:w-[40%] relative">
                    <img
                        src="https://cdn.shopify.com/b/shopify-brochure2-assets/2083b4178afc5db338c7d6081f8a5838.jpg?originalWidth=916&originalHeight=600"
                        className='rounded-lg w-full'
                        alt=""
                    />
                    <img
                        src="https://cdn.shopify.com/b/shopify-brochure2-assets/07ae0290367bd34e86e56cdfeeae6846.jpg?originalWidth=916&originalHeight=600&width=800"
                        alt=""
                        className="absolute inset-0 w-full object-cover rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100"
                    />
                    <h1 className='text-[20px] sm:text-[25px] font-[600] mt-4'>Grow as big as you want</h1>
                    <p className="text-[14px] sm:text-[16px]">Athleisure brand Gymshark grew from working out of a garage to the global juggernaut it is today, with $500M+ sales annually.</p>
                </div>

                <div className="w-full sm:w-[40%] relative">
                    <img
                        src="https://cdn.shopify.com/b/shopify-brochure2-assets/7c3d68ca99f2f743df8cb1187bbd2cb1.jpg?originalWidth=914&originalHeight=600&width=800"
                        className='rounded-lg w-full'
                        alt=""
                    />
                    <img
                        src="https://cdn.shopify.com/b/shopify-brochure2-assets/22e30e7d8c99419f290192accf478f58.jpg?originalWidth=914&originalHeight=600&width=800"
                        alt=""
                        className="absolute inset-0 w-full object-cover rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100"
                    />
                    <h1 className='text-[20px] sm:text-[25px] font-[600] mt-4'>Raise the bar</h1>
                    <p className="text-[14px] sm:text-[16px]">With the help of Shopify for enterprise, Mattel sells their iconic toys direct to customers around the world, with the help of Shopify for enterprise.</p>
                </div>
            </div>

            <div className="flex justify-center items-center mt-6">
                <button className='text-white bg-black hover:text-black hover:bg-white border border-1 p-4 rounded-full'>
                    Pick a plan that fits
                </button>
            </div>
            <div className="p-4 sm:p-8">
                <p className="text-[#538ae0] mt-10 text-center sm:text-left">
                    Online and in person
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start mt-6">
                    <h1 className="text-white text-[30px] sm:text-[50px] font-[400] text-center sm:text-left">
                        Sell here, there, and everywhere
                    </h1>
                    <p className="text-[16px] sm:text-[20px] text-center sm:text-left">
                        Get a stunning store that’s made to sell—whether you build from scratch or start fast with pre-built themes.
                    </p>
                </div>
                <div className="mt-8 p-2  rounded-lg  bg-gradient-to-b from-[#0A1F26] to-[#0E2A34]">
                    <Video2Background />
                </div>
            </div>
            <div className="min-h-screen bg-gradient-to-b from-[#0A1F26] to-[#0E2A34] flex items-center justify-center px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-[90%]">
                    <div className="bg-[#0F2D35] p-6  rounded-lg shadow-lg flex items-center justify-center">
                        <div className="relative w-full h-[300px] sm:h-[400px]">
                            <video
                                autoPlay
                                loop
                                muted
                                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                            >
                                <source
                                    src="https://cdn.shopify.com/b/shopify-brochure2-assets/45a3383c028e78e582e4340cfbbb474a.webm"
                                    type="video/mp4"
                                />
                            </video>
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
                                <source src="/thirdvideo.webm" type="video/mp4" />
                            </video>
                        </div>

                        <div className="mt-4 text-center">
                            <p className="text-white text-sm sm:text-base">
                                <span className='text-[20px] font-[600]' > Powered by the world’s best checkout.</span> <br />
                                Shopify Checkout is fast, fully customizable, and optimized to close more sales.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>

            <FirstCatVideo/>
            <ImageVideoContainer/>
            <FeatureSection/>
            <FourthCat/>
            <Footer/>
            </div>
        </div>
    );
};

export default SecondCat;
