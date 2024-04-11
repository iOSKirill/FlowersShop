import React from "react";
import { IOffer } from "../../models/offer.model";
import OfferCard from "../OfferCard";

interface IProps {
  offers: IOffer[];
}

const OfferList: React.FC<IProps> = ({ offers }) => {
  return (
    <ul className="list-none grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
      {offers.map((offer) => (
        <OfferCard offer={offer} key={offer.id} />
      ))}
    </ul>
  );
};

export default OfferList;
