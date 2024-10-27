import { useSelector } from "react-redux";
import useBackgroundTrailer from "../hooks/useBackgroundTrailer";

const BackgroundVideo = ({ movieId }) => {
  const currentTrailer = useSelector((store) => store.movies?.movieTrailer);
  const movieKey = currentTrailer?.key;
  useBackgroundTrailer(movieId);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + movieKey}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
