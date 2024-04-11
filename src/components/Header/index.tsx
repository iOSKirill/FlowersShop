import React, { useState } from "react";
import Navbar from "../Navbar";
import { useWindowDimensions } from "../../hooks/useWindowDimension";

const Header: React.FC = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const toggleBurgerMenu = () => {
    setIsBurgerOpen((prev) => !prev);
  };

  return (
    <header className="w-full relative shadow-lg md:shadow-none">
      <div className="hidden md:block absolute w-full h-full bg-black/30 z-[-2]" />
      <div className="hidden md:block absolute w-full h-full bg-[#FF7347]/30 z-[-1]" />
      <img
        className="hidden md:block absolute w-full h-full object-center object-cover z-[-3]"
        src="/header-background.jpg"
        alt="background flowers"
      />
      <div className="relative py-4 md:py-10 max-w-screen-2xl mx-7 2xl:mx-auto flex justify-between md:justify-center items-center">
        <button onClick={toggleBurgerMenu} className="block md:hidden">
          <img
            src="/icons/burger.svg"
            className="w-6 h-6 object-center object-cover"
            alt="burger menu"
          />
        </button>
        <div className="space-y-3 w-full absolute md:relative flex flex-col justify-center items-center z-[-1]">
          <h1 className="text-[24px] md:text-[52px] font-rosarivo text-black md:text-white text-center">
            Blossom Haven
          </h1>
          <Navbar isBurgerOpen={isBurgerOpen} />
        </div>
        <div className="block md:absolute right-0 top-[35%] flex items-center space-x-3 md:space-x-[25px]">
          <img
            className="w-6 h-6 object-center object-cover hidden lg:block"
            src="/icons/bag.svg"
            alt="bag icon"
          />
          <img
            className="w-6 h-6 object-center object-cover"
            src={width < 768 ? "/icons/black-user.svg" : "/icons/user.svg"}
            alt="user icon"
          />
          <img
            className="w-6 h-6 object-center object-cover"
            src={width < 768 ? "/icons/black-glass.svg" : "/icons/glass.svg"}
            alt="glass icon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
