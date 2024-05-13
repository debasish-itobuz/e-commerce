import React from "react";
import { useNavigate } from "react-router-dom";
import { laptopData } from "../Data";

const Laptops = () => {

  const navigate = useNavigate()

  function handleClick(item){
    console.log(item)
    navigate(`/laptops/:${item.name.toLowerCase()}`, {state:item})
  }

  return (
    <div className="bg-white m-5 p-4 px-8">
      <h3 className="text-2xl font-semibold mb-4">Deals on Laptops</h3>
      <div className="flex justify-start items-center gap-12 lg:gap-20 overflow-scroll noScroll">
        {laptopData.map((item) => (
          <div onClick={()=>handleClick(item)} key={item.name} className="flex flex-col items-center flex-shrink-0 cursor-pointer ">
            <img src={item.image} alt={item.name} className=" w-36 h-28" />
            <h3>{item.name}</h3>
            <p className="font-semibold">From Rs. {item.price}/-</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laptops;
