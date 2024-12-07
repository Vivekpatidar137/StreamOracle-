import { useSelector } from "react-redux";
import useBackgroundTrailer from "../hooks/useBackgroundTrailer";

const BackgroundVideo = ({ movieId }) => {
  const currentTrailer = useSelector((store) => store.movies?.movieTrailer);
  const movieKey = currentTrailer?.key;
  useBackgroundTrailer(movieId);
  return (
    <div className="relative -mt-14">
      <iframe
        className="w-screen aspect-video h-full"
         src={`https://www.youtube.com/embed/${movieKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${movieKey}`}
        title="YouTube video player"
        allow="autoplay; encrypted-media; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      <div className="absolute inset-0 w-screen aspect-video h-full bg-black bg-opacity-50"></div>
    </div>
  );
};

export default BackgroundVideo;