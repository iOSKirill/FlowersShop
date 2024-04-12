import React from "react";
import FlowerList from "../../components/FlowerList";
import FlowersImage from "../../assets/flowers.jpg";
import { IFlower } from "../../models/flowers.model";
import OneLineForm from "../Main/OneLineForm";

const flowers: IFlower[] = [
  {
    id: 1,
    name: "Sweet & Pretty Bouquet",
    price: 85,
    reviews_amount: 5,
    rating: 4.5,
    sizing: "Small",
    image: FlowersImage,
  },
  {
    id: 2,
    name: "Sweet & Pretty Bouquet",
    price: 85,
    reviews_amount: 5,
    rating: 4.5,
    sizing: "Small",
    image: FlowersImage,
  },
  {
    id: 3,
    name: "Sweet & Pretty Bouquet",
    price: 85,
    reviews_amount: 5,
    rating: 4.5,
    sizing: "Small",
    image: FlowersImage,
  },
  {
    id: 4,
    name: "Sweet & Pretty Bouquet",
    price: 85,
    reviews_amount: 5,
    rating: 4.5,
    sizing: "Small",
    image: FlowersImage,
  },
  {
    id: 5,
    name: "Sweet & Pretty Bouquet",
    price: 85,
    reviews_amount: 5,
    rating: 4.5,
    sizing: "Small",
    image: FlowersImage,
  },
  {
    id: 6,
    name: "Sweet & Pretty Bouquet",
    price: 85,
    reviews_amount: 5,
    rating: 4.5,
    sizing: "Small",
    image: FlowersImage,
  },
  {
    id: 7,
    name: "Sweet & Pretty Bouquet",
    price: 85,
    reviews_amount: 5,
    rating: 4.5,
    sizing: "Small",
    image: FlowersImage,
  },
  {
    id: 8,
    name: "Sweet & Pretty Bouquet",
    price: 85,
    reviews_amount: 5,
    rating: 4.5,
    sizing: "Small",
    image: FlowersImage,
  },
  {
    id: 9,
    name: "Sweet & Pretty Bouquet",
    price: 85,
    reviews_amount: 5,
    rating: 4.5,
    sizing: "Small",
    image: FlowersImage,
  },
  {
    id: 10,
    name: "Sweet & Pretty Bouquet",
    price: 85,
    reviews_amount: 5,
    rating: 4.5,
    sizing: "Small",
    image: FlowersImage,
  },
  {
    id: 11,
    name: "Sweet & Pretty Bouquet",
    price: 85,
    reviews_amount: 5,
    rating: 4.5,
    sizing: "Small",
    image: FlowersImage,
  },
  {
    id: 12,
    name: "Sweet & Pretty Bouquet",
    price: 85,
    reviews_amount: 5,
    rating: 4.5,
    sizing: "Small",
    image: FlowersImage,
  },
];

const Flowers: React.FC = () => {
  return (
    <main className="py-20">
      <div className="space-y-2">
        <h1 className="text-[48px] md:text-[60px] font-rosarivo text-center">
          Flowers
        </h1>
        <p className="max-w-screen-2xl mx-5 2xl:mx-auto text-center text-base md:text-[20px] text-[#717171]">
          Lorem ipsum dolor sit amet consectetur. Volutpat sed dui pellentesque
          lorem. Ut fames elementum et molestie nulla sed et. Sed eget blandit
          euismod maecenas sed purus suspendisse. A sit interdum etiam id eget
          vitae orci aliquam ac.
        </p>
      </div>

      <section className="mt-10 md:mt-20 max-w-screen-2xl mx-5 2xl:mx-auto">
        <FlowerList className="grid-cols-2" flowers={flowers} />
      </section>

      <section
        className="relative mt-10 md:mt-20"
        style={{
          backgroundImage: `url(./tulpans-background.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute w-full h-full bg-black/30 z-[0]" />
        <div className="absolute w-full h-full bg-[#FFE6B7]/50 z-[0]" />
        <div className="max-w-screen-2xl mx-5 2xl:mx-auto relative py-10 space-y-10 h-full md:h-[90vh] flex flex-col justify-center items-center text-center">
          <p className="text-[20px] md:text-[30px] font-rosarivo text-center text-white">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="max-w-[50rem] text-white text-bold text-base md:text-[20px]">
            Lorem ipsum dolor sit amet consectetur. Nunc tempus consequat
            senectus imperdiet est purus enim. Iaculis odio eget rutrum
            ultricies egestas. Sed sed eget vitae nulla dignissim pretium.
            Sollicitudin turpis orci eu sed morbi amet. Habitasse lobortis morbi
            aliquam turpis nam elit eget. Cras nisi facilisis consequat eget
            elementum morbi. Dui ut malesuada at vitae tortor. Facilisis morbi
            blandit amet amet ultrices. In sit sit at consectetur interdum.
            Fermentum condimentum amet sapien netus laoreet eu. Netus eu
            sagittis integer amet ipsum mauris. Eu elementum dapibus mattis
            pellentesque arcu. Augue in at at tincidunt quis id amet vitae.{" "}
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-10 justify-center items-center max-w-screen-2xl mx-5 2xl:mx-auto mt-10 md:mt-20">
        <div className="space-y-1">
          <p className="text-[24px] font-semibold">
            Get the Latest From Blossom Haven
          </p>
          <p className="font-light max-w-[35rem]">
            Be the first to hear about new arrivals, promotions, style
            inspiration and exclusive sneak peeks.
          </p>
        </div>

        <OneLineForm />
      </section>
    </main>
  );
};

export default Flowers;
