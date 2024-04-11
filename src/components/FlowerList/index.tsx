import React from "react";
import { IFlower } from "../../models/flowers.model";
import FlowerCard from "../FlowerCard";

interface IProps {
  flowers: IFlower[];
}

const FlowerList: React.FC<IProps> = ({ flowers }) => {
  return (
    <ul className="list-none grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
      {flowers.map((flower) => (
        <FlowerCard key={flower.id} flower={flower} />
      ))}
    </ul>
  );
};

export default FlowerList;
