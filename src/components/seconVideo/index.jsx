import React from "react";

const Video2Background = () => {
  return (
    <div className="relative w-full h-[60vh]  sm:h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/secondvideo.mp4" type="video/mp4" />
          </video>
    </div>
  );
};

export default Video2Background;

