import style from "./HomeVideo.module.css";
import { default as video } from "shared/video/video.mp4";

const HomeVideo = () => {
  return (
    <>
      <video className={style.homeVideo} autoPlay muted loop>
        <source type="video/mp4" src={video} />
      </video>
    </>
  );
};

export default HomeVideo;
