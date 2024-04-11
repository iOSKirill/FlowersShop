import React from "react";
import FlowerList from "../../components/FlowerList";
import { IFlower } from "../../models/flowers.model";
import FlowersImage from "../../assets/flowers.jpg";
import FlowersShop from "../../assets/flowers-shop.jpg";
import OfferImage from "../../assets/offer-flower.jpg";
import OfferList from "../../components/OfferList";
import OneLineForm from "./OneLineForm";

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

const flowerPics = [
  {
    id: 1,
    image: "/flower-1.jpg",
  },
  {
    id: 2,
    image: "/flower-2.jpg",
  },
  {
    id: 3,
    image: "/flower-3.jpg",
  },
];

const offers = [
  {
    id: 1,
    title: "Birthday Gifs From 50$",
    image: OfferImage,
  },
  {
    id: 2,
    title: "Wedding Bouquets From 100$",
    image: OfferImage,
  },
  {
    id: 3,
    title: "Flower Arrangements From 30$",
    image: OfferImage,
  },
];

const Main: React.FC = () => {
  const handleClick = () => {
    alert("Никита Васильевич, поставьте зачет, пожалуйста!");
  };

  return (
    <main className="py-20">
      <FlowerList flowers={flowers.slice(0, 3)} />

      <section className="flex flex-col md:flex-row gap-y-10 md:gap-x-20 items-center max-w-screen-2xl mx-5 2xl:mx-auto mt-20">
        <img
          className="w-[63%] h-[50%] object-center object-cover"
          src={FlowersShop}
          alt="flowers shop"
        />

        <div className="space-y-[20px] text-[20px] font-medium">
          <p>OUR STORE</p>
          <p className="text-[#434141]">Blossom Havenc/floral 523</p>
          <p className="text-[#434141]">
            Monday - 9am-5pm
            <br /> Tuesday - Friday 9am-7pm
            <br /> Sat - 9am-6pm
            <br /> Sun - Closed
          </p>
        </div>
      </section>

      <section
        className="object-center object-cover space-y-10 flex flex-col justify-center relative mt-20"
        style={{
          backgroundImage: `url(./flowers-background.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute w-full h-full bg-[#FFE6B7]/50 z-[0]" />
        <div className="max-w-screen-2xl mx-5 2xl:mx-auto relative py-10 space-y-10">
          <div className="space-y-2">
            <p className="text-[20px] font-semibold text-[#717171] text-center">
              @Blossom Haven
            </p>
            <p className="text-[30px] font-rosarivo text-[#292D32] text-center">
              Follow us on Instagram
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {flowerPics.map((flowerPic) => (
              <li key={flowerPic.id} className="w-full h-[40rem]">
                <img
                  className="object-cover object-center w-full h-full"
                  src={flowerPic.image}
                  alt={`flower-${flowerPic.id}`}
                />
              </li>
            ))}
          </ul>

          <div className="w-full flex justify-center items-center">
            <button
              className="bg-white py-[20px] px-[70px] text-[#717171] text-[20px]"
              onClick={handleClick}
            >
              Join our Feed
            </button>
          </div>
        </div>
      </section>

      <section
        className="relative"
        style={{
          backgroundImage: `url(./yellow-flowers-background.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute w-full h-full bg-black/30 z-[0]" />
        <div className="absolute w-full h-full bg-[#FFE6B7]/50 z-[0]" />
        <div className="max-w-screen-2xl mx-5 2xl:mx-auto relative py-10 space-y-10 h-full md:h-[90vh] flex flex-col justify-center items-center text-center">
          <p className="text-[30px] font-rosarivo text-center text-white">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="max-w-[50rem] text-white text-bold text-[20px]">
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

      <section className="flex flex-col md:flex-row gap-y-10 md:gap-x-20 items-center max-w-screen-2xl mx-5 2xl:mx-auto mt-20">
        <OfferList offers={offers} />
      </section>

      <section className="flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-10 justify-center items-center max-w-screen-2xl mx-5 2xl:mx-auto mt-40">
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

export default Main;
