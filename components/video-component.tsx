import React from "react";

function VideoComponent({ videoRef, sources }: { videoRef: any, sources: { src: string, type: string }[] }) {
  return (
    <video
      ref={videoRef}
      className="max-w-sm border-2 border-black shadow-bottom rounded-lg blur-sm"
      muted
      loop
      autoPlay
    >
      {sources.map((source, index) => (
        <source key={index} src={source.src} type={source.type} />
      ))}
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoComponent;
