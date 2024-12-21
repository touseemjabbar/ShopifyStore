import React, { useEffect, useState } from "react";

const VideoBackground = () => {
    const [dynamicText, setDynamicText] = useState("Unstoppable");

    const words = ["Big thing", "One to Watch", "category creater", "unicorn startup", "Household name", "solo flier", "store they line up for"];

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % words.length;
            setDynamicText(words[index]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen  overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/video.mp4" className="w-[90px]" type="video/mp4" />
            </video>

            <div className="absolute top-1/3 left-0 transform -translate-y-1/2 pl-8 text-white z-20">
                <h1 className="text-8xl font-[400]">Be the Best</h1>
                <p className="mt-4 text-lg">
                    <span className="text-8xl font-[400]">{dynamicText}</span><br />
                </p>
                <p className="mt-4 text-lg absolute  -bottom-20 pl-2">
                    <span className="text-[25px]">
                        Dream big, build fast, and grow far on Shopify.</span>
                        <p className="absolute -bottom-20 flex items-center gap-3">
                            <button className="px-5 py-3 bg-white text-black rounded-full hover:bg-gray-400 hover:text-white transition-all">
                        Start Free Trial
                    </button><span>Get 3 days free<br/>
                    then 1 month for $1</span></p>
                        </p>
                        
            </div>
        </div>
    );
};

export default VideoBackground;
