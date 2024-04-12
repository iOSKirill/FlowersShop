import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IFlower } from "../../models/flowers.model";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface IProps {
  flowers: IFlower[];
}

const FlowersCarousel: React.FC<IProps> = ({ flowers }) => {
  return (
    <Carousel
      responsive={responsive}
      autoPlay
      keyBoardControl={false}
      showDots={false}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      infinite
    >
      {flowers.map((flower) => (
        <div key={flower.id} className="relative space-y-6 w-full h-full pr-6">
          <img
            className="h-[20rem] md:h-[30rem] w-full object-cover object-center"
            src={flower.image}
            alt={flower.name}
          />
          <div className="flex flex-col justify-center items-center w-full">
            <p className="font-rosarivo text-black ">{flower.name}</p>
            <div className="text-[20px] font-medium flex space-x-1">
              <p className="text-gray-400 font-lighter ">FROM</p>
              <p className="text-black">{flower.price}$</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default FlowersCarousel;
