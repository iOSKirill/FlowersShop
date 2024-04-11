import React from "react";
import { IFlower } from "../../models/flowers.model";

interface IProps {
  flower: IFlower;
}

const FlowerCard: React.FC<IProps> = ({ flower }) => {
  return (
    <li className="relative space-y-6 w-full h-full">
      <img
        className="h-[30rem] w-full object-cover object-center"
        src={flower.image}
        alt={flower.name}
      />
      <div className="flex flex-col justify-center items-center">
        <p className="font-rosarivo text-black text-[24px]">{flower.name}</p>
        <div className="text-[20px] font-medium flex space-x-1">
          <p className="text-gray-400 font-lighter">FROM</p>
          <p className="text-black">{flower.price}$</p>
        </div>
      </div>
    </li>
  );
};

export default FlowerCard;
