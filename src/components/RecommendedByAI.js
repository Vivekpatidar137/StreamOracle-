import AiSearchBar from "./AiSearchBar"
import backgroundImg from "../myAssets/background .jpg";

const RecommendedByAI = () => {
  return (
    <div className="relative w-full h-screen">
    <img
      className="absolute inset-0 w-full h-full object-cover object-center z-0"
      src={backgroundImg}
      alt="background-image"
    />
    <div className="relative z-10">
      <AiSearchBar />
    </div>
  </div>
  )
}

export default RecommendedByAI