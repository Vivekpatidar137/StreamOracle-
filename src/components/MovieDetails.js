import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import { IMAGE_CDN_URL } from "../utils/constant";
import { FaCalendarAlt, FaClock, FaStar } from "react-icons/fa";
import MovieDetailsShimmer from "./MovieDetailsShimmer";

const MovieDetails = () => {
  const { id } = useParams();
  const movieDetails = useFetchDetails(id);

  if (!movieDetails) {
    return <MovieDetailsShimmer />;
  }

  const {
    title,
    overview,
    backdrop_path,
    poster_path,
    genres,
    release_date,
    runtime,
    tagline,
    vote_average,
    production_companies,
  } = movieDetails;

  const releaseYear = new Date(release_date).getFullYear();
  const formattedRuntime = `${Math.floor(runtime / 60)}h ${runtime % 60}m`;

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen">
      {/* Backdrop */}
      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
        <img
          src={`${IMAGE_CDN_URL}${backdrop_path}`}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 relative -mt-24 md:-mt-40 z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Poster */}
          <div className="md:w-1/3 shadow-lg rounded-lg overflow-hidden">
            <img
              src={`${IMAGE_CDN_URL}${poster_path}`}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Movie Info */}
          <div className="md:w-2/3">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              {title}
            </h1>
            <p className="text-gray-300 italic mb-6 text-lg">
              {tagline ? `"${tagline}"` : ""}
            </p>

            <div className="flex flex-wrap gap-4 mb-6 pt-3">
              {genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-gray-700/70 text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <p className="text-lg leading-relaxed mb-8">{overview}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-lg text-gray-300">
              <div className="flex flex-col items-center text-center bg-gray-800/50 p-4 rounded-lg shadow-md hover:shadow-lg transition">
                <FaCalendarAlt className="text-3xl text-blue-400 mb-2" />
                <strong className="text-sm font-semibold uppercase tracking-wide mb-1 text-gray-200">
                  Release Year
                </strong>
                <span className="text-base">{releaseYear}</span>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-800/50 p-4 rounded-lg shadow-md hover:shadow-lg transition">
                <FaClock className="text-3xl text-green-400 mb-2" />
                <strong className="text-sm font-semibold uppercase tracking-wide mb-1 text-gray-200">
                  Runtime
                </strong>
                <span className="text-base">{formattedRuntime}</span>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-800/50 p-4 rounded-lg shadow-md hover:shadow-lg transition">
                <FaStar className="text-3xl text-yellow-400 mb-2" />
                <strong className="text-sm font-semibold uppercase tracking-wide mb-1 text-gray-200">
                  Rating
                </strong>
                <span className="text-base text-yellow-400">
                  {vote_average} / 10
                </span>
              </div>
            </div>

            {/* Production Companies */}
            {production_companies.length > 0 && (
              <div>
                <h3 className="text-xl font-medium mb-4">
                  <span role="img" aria-label="Production Companies">
                    🏢
                  </span>{" "}
                  Production Companies
                </h3>
                <div className="flex flex-wrap gap-4">
                  {production_companies.map((company) => (
                    <div key={company.id} className="flex items-center gap-2">
                      {company.logo_path && (
                        <img
                          src={`${IMAGE_CDN_URL}${company.logo_path}`}
                          alt={company.name}
                          className="w-10 h-10 object-contain rounded-full bg-gray-800 p-1"
                        />
                      )}
                      <span className="text-sm text-gray-400">
                        {company.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
