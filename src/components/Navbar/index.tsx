import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    id: 0,
    name: "Christmas Gifts",
    href: "/christmas-gifts",
  },
  {
    id: 1,
    name: "New in",
    href: "/new-in",
  },
  {
    id: 2,
    name: "Flowers",
    href: "/flowers",
  },
  {
    id: 3,
    name: "Plants",
    href: "/plants",
  },
  {
    id: 4,
    name: "Weddings",
    href: "/weddings",
  },
  {
    id: 5,
    name: "Valentine’s day",
    href: "/valentines-day",
  },
];

interface IProps {
  isBurgerOpen: boolean;
}

const Navbar: React.FC<IProps> = ({ isBurgerOpen }) => {
  return (
    <>
      <nav className="hidden md:flex space-x-[60px]">
        {navItems?.map((item) => (
          <Link
            key={item.id}
            to={item.href}
            className="text-white text-[20px] font-bold hover:text-[#FF7347] hover:cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <nav
        className={`w-full fixed top-[2%] ${
          isBurgerOpen ? "block md:hidden" : "hidden"
        }`}
      >
        <div className="pt-3">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {navItems?.map((items) => (
              <li key={items.id}>
                <Link
                  to={items.href}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  {items.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
