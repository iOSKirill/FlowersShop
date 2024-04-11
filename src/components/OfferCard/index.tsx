import React from "react";
import { IOffer } from "../../models/offer.model";

interface IProps {
  offer: IOffer;
}

const OfferCard: React.FC<IProps> = ({ offer }) => {
  return (
    <li
      className="relative object-center object-cover w-full h-[30rem] p-[30px]"
      style={{
        backgroundImage: `url(${offer.image})`,
      }}
    >
      <div className="relative w-full h-full">
        <div className="absolute bg-white/90 w-full bottom-0 p-6">
          <p className="text-[30px] font-semibold">{offer.title}</p>
          <a className="underline font-light" href="/">
            SHOP NOW
          </a>
        </div>
      </div>
    </li>
  );
};

export default OfferCard;
