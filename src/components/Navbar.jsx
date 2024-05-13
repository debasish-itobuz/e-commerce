import { useState } from "react";
import { IoCart } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { CgSmartHomeCooker } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import logo from "../assets/navbar/logo.png";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  //instance
  const navigate = useNavigate()

  function handleLogoClick() {
    navigate("/")
  }

  //hambergur
  function handleNavbar() {
    setNav((prev) => !prev);
  }

  return (
    <nav className="p-5 md:flex justify-between gap-4 xl:gap-16 lg:px-32 relative bg-white">
      <div className="flex justify-between mb-3">
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-[100px] md:w-[150px] cursor-pointer"
            onClick={handleLogoClick}
          />
        </div>
        <div className="flex items-center md:hidden">
          <FaBars onClick={handleNavbar} className="cursor-pointer" />
        </div>
      </div>
      <div className="md:flex-1 relative">
        <CiSearch className="absolute top-3 left-4 text-xl" />
        <input
          type="search"
          placeholder="Search...."
          className="w-full focus:outline-none border-2 p-2 ps-12 rounded-lg bg-slate-200"
        />
      </div>
      <div className="hidden md:flex gap-4 lg:gap-8">
        <button className="flex items-center gap-2 lg:gap-4">
          <FaUserCircle />
          <span>Login</span>
        </button>
        <button className="flex items-center gap-2 lg:gap-4">
          <IoCart /> <span>Cart</span>
        </button>
        <button className="flex items-center gap-2 lg:gap-4">
          <CgSmartHomeCooker />
          <span>Become a seller</span>
        </button>
      </div>

      {nav && (
        <ul className="block md:hidden absolute top-[3.5rem] left-0 bg-neutral-400 text-white w-full p-4">
          <li>Login</li>
          <li>Cart</li>
          <li>Seller</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
