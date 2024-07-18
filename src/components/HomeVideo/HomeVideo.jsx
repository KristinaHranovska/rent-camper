import { useEffect, useRef } from "react";
import style from "./HomeVideo.module.css";
import { default as video } from "shared/video/video.mp4";

const HomeVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className={style.container}>
      <video
        ref={videoRef}
        className={style.homeVideo}
        autoPlay
        muted
        loop
        playsInline
      >
        <source type="video/mp4" src={video} />
      </video>
    </div>
  );
};

export default HomeVideo;
