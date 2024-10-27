const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-72 px-10">
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="py-3 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-black text-white p-2">Play</button>
        <button className="mx-2 bg-slate-500 text-white p-2">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
 