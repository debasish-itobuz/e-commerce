import { headerData } from "../Data";

const Header = () => {
  return (
    <div className="flex justify-start xl:justify-center items-center gap-12 lg:gap-20 bg-white m-5 p-4 overflow-scroll noScroll">
      {headerData.map((item) => (
        <div className="flex flex-col items-center flex-shrink-0 cursor-pointer " key={item.name}>
          <img src={item.image} alt={item.name} className="w-20 h-20" />
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Header;
