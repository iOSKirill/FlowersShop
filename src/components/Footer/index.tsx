import React from "react";
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import Peace from "../../assets/peace.svg";
import Ball from "../../assets/ball.svg";
import { useWindowDimensions } from "../../hooks/useWindowDimension";

const socials = [
  { name: "Twitter", icon: Twitter },
  { name: "Facebook", icon: Facebook },
  { name: "Linkedin", icon: Linkedin },
  { name: "Github", icon: Github },
  { name: "Peace", icon: Peace },
  { name: "Ball", icon: Ball },
];

const fastLinks = [
  {
    id: 1,
    title: "Marketplace",
    links: [
      { name: "Buy Product", link: "/buy" },
      { name: "Sell Product", link: "/sell" },
      { name: "Our Creator", link: "/creator" },
    ],
  },
  {
    id: 2,
    title: "Resources",
    links: [
      { name: "Documentation", link: "/documentation" },
      { name: "Tutorials", link: "/tutorials" },
      { name: "Support", link: "/support" },
    ],
  },
  {
    id: 3,
    title: "Company",
    links: [
      { name: "About Us", link: "/about" },
      { name: "Careers", link: "/careers" },
      { name: "Contact Us", link: "/contact" },
    ],
  },
  {
    id: 4,
    title: "Legal",
    links: [
      { name: "Privacy Policy", link: "/privacy" },
      { name: "Terms of Service", link: "/terms" },
      { name: "Licenses", link: "/licenses" },
    ],
  },
];

const Footer: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <footer
      className={`py-14 border-t border-black/20 ${
        width > 700 ? "flex justify-between items-center" : "grid grid-cols-2"
      } space-y-6 md:space-y-0 space-x-0 md:space-x-10 max-w-screen-2xl mx-5 2xl:mx-auto`}
    >
      <div className="space-y-4 col-span-2">
        <p className="font-rosarivo text-[38px]">Blossom Haven</p>
        <p className="text-[#1E1E1E]/80 text-[15px] max-w-[20rem]">
          This growth plan will help you reach your resolutions and achieve the
          goals you have been striving towards.
        </p>

        <div className="flex space-x-4">
          {socials.map((social, index) => (
            <img
              key={index}
              src={social.icon}
              alt={social.name}
              className="w-6 h-6"
            />
          ))}
        </div>
      </div>

      {fastLinks.map((fastLink) => (
        <div key={fastLink.id} className="space-y-4">
          <p className="font-semibold">{fastLink.title}</p>
          <ul className="list-none">
            {fastLink.links.map((link) => (
              <li key={link.name}>
                <a href={link.link} className="text-[#1E1E1E]/80">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
