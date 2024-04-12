import React from "react";
import { IFlower } from "../../models/flowers.model";
import FlowerCard from "../FlowerCard";
import clsx from "clsx";

interface IProps {
  flowers: IFlower[];
  className?: string;
}

const FlowerList: React.FC<IProps> = ({ flowers, className }) => {
  return (
    <ul
      className={clsx(
        "list-none grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10",
        className
      )}
    >
      {flowers.map((flower) => (
        <FlowerCard key={flower.id} flower={flower} />
      ))}
    </ul>
  );
};

export default FlowerList;
