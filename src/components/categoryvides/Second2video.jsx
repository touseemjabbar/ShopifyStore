import { useState, useEffect } from "react";

const ImageVideoContainer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            src: "https://cdn.shopify.com/b/shopify-brochure2-assets/1d40849c5137319b5f80efc99e33bff9.jpg?originalWidth=406&originalHeight=452",
            name: "Buy Now"
        },
        {
            src: "https://cdn.shopify.com/b/shopify-brochure2-assets/cf513e7e66200e46908943f6de71de56.jpg?originalWidth=406&originalHeight=452",
            name: "Buy Now"
        },
        {
            src: "https://cdn.shopify.com/b/shopify-brochure2-assets/375652716df8f879dbf34419c8ae0d50.jpg?originalWidth=406&originalHeight=452",
            name: "Buy Now"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <p className="text-[#538ae0] text-[30px] sm:text-[20px] font-[400]">Local and global</p>
            <h2 className="text-[25px] sm:text-[35px] font-[500]">Grow around the world</h2>
            <div className="flex justify-center items-center w-full">
                <div className="relative w-[90%] sm:w-[100%] h-[60vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] flex flex-col sm:flex-row gap-4 items-center justify-between  p-0 rounded-lg overflow-hidden mt-0 mb-0">

                    <div className="w-full sm:w-1/2 h-full flex flex-col gap-4 relative">
                        <div className="w-full h-full relative">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    alt={`carousel-img-${index}`}
                                    className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                            ))}

                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#0F2D35] text-white px-6 py-2 hover:bg-white hover:text-black rounded-full text-lg">
                                <button>{images[currentIndex].name}</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 h-full relative">
                        <video
                            autoPlay
                            loop
                            muted
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        >
                            <source src="/fourthvideo.webm" type="video/mp4" />
                        </video>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ImageVideoContainer;
