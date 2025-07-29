import { useSelector } from "react-redux";
import BackgroundVideo from "./BackgroundVideo";
import VideoTitle from "./VideoTitle";
import { HeroShimmer } from "./Shimmer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return <HeroShimmer />;

  const playingMovie = movies[0];
  const { original_title, overview, id } = playingMovie;

  return (
    <div className="relative w-full h-full">
      <BackgroundVideo movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
