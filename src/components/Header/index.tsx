import React, { useState } from "react";
import Navbar from "../Navbar";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import BlackUser from  "../../assets/icons/black-user.svg"
import User from "../../assets/icons/user.svg"
import BlackGlass from "../../assets/icons/black-glass.svg"
import Glass from "../../assets/icons/glass.svg"
import HeaderBackground from "../../assets/header-background.jpg"
import Burger from "../../assets/icons/burger.svg"
import Bag from "../../assets/icons/bag.svg"

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
        src={HeaderBackground}
        alt="background flowers"
      />
      <div className="relative py-4 md:py-10 max-w-screen-2xl mx-7 2xl:mx-auto flex justify-between md:justify-center items-center z-10">
        <button onClick={toggleBurgerMenu} className="block md:hidden">
          <img
            src={Burger}
            className="w-6 h-6 object-center object-cover"
            alt="burger menu"
          />
        </button>
        <div className="space-y-3 w-full absolute md:relative flex flex-col justify-center items-center z-[-1]">
          <Link
            to={ROUTES.MAIN}
            className="text-[24px] md:text-[52px] font-rosarivo text-black md:text-white text-center"
          >
            Blossom Haven
          </Link>
          <Navbar isBurgerOpen={isBurgerOpen} />
        </div>
        <div className="block md:absolute right-0 top-[35%] flex items-center space-x-3 md:space-x-[25px]">
          <img
            className="w-6 h-6 object-center object-cover hidden lg:block"
            src={Bag}
            alt="bag icon"
          />
          <img
            className="w-6 h-6 object-center object-cover"
            src={width < 768 ? BlackUser : User}
            alt="user icon"
          />
          <img
            className="w-6 h-6 object-center object-cover"
            src={width < 768 ? BlackGlass : Glass}
            alt="glass icon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
