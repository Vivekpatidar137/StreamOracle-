import logo from "../myAssets/StreamOracle.png";

const Header = () => {
  return (
    <div className="absolute w-full py-4">
      <div className="relative">
        <div className="inset-0 bg-gradient-to-b from-black to-transparent"></div>
        <img
          className="w-60 relative z-10 ml-20" 
          src={logo} 
          alt="StreamOracle Logo" 
        />
      </div>
    </div>
  );
};

export default Header;
