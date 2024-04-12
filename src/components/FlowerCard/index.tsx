import React from "react";
import { IFlower } from "../../models/flowers.model";

interface IProps {
  flower: IFlower;
}

const FlowerCard: React.FC<IProps> = ({ flower }) => {
  return (
    <li className="relative space-y-6 w-full h-full">
      <img
        className="h-[13rem] md:h-[30rem] w-full object-cover object-center"
        src={flower.image}
        alt={flower.name}
      />
      <div className="flex flex-col justify-start md:justify-center items-center w-full">
        <p className="font-rosarivo text-black text-[12px] md:text-[24px] text-left">
          {flower.name}
        </p>
        <div className="text-[20px] font-medium flex justify-start md:justify-center space-x-1 w-full">
          <p className="text-gray-400 font-lighter text-[8px] md:text-base">
            FROM
          </p>
          <p className="text-black text-[8px] md:text-base ">{flower.price}$</p>
        </div>
      </div>
    </li>
  );
};

export default FlowerCard;
