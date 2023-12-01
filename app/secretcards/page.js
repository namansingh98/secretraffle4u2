import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import arrowFace from "@/public/horizontal-left.png";
import arrowBack from "@/public/horizontal-right.png";
import silver from "@/public/silver.png";
import platCard from "@/public/platinamcard.png";
import vipCard from "@/public/vipcard.png";
import kingCrown from "@/public/kingcrown.png";
import goldCard from "@/public/goldcard.png";
import clover from "@/public/clover.png";
import green from "@/public/green.png";
import star from "@/public/start.png";
import happy from "@/public/happycard.png";
import ring from "@/public/64ae9a3f206211689164351.png";
import Image from "next/image";


const Card = ({ imagePath, jackpot, cardType, price, icon, img }) => {
  return (
    <div className="max-w-md overflow-hidden shadow-lg m-4 border-[#AC8A4D] border-2 text-center">
      <div className="px-6 py-4 bg-[#2A2522] border-b-2 border-[#AC8A4D] ">
        <div className="font-semibold text-xl text-white mb-2 tracking-widest">
          {cardType}
        </div>
        <p className="card-Text_heading text-gray-700 text-2xl font-semibold mb-2">
          JACKPOT {jackpot}
        </p>
      </div>
      <div className="mx-auto w-full">
        <div className="card_bgmain mx-auto p-5">
          <Image
            className="mx-auto w-[80%] h-48 object-fill border-2 border-[#AC8A4D] bgshadow"
            src={imagePath}
            alt="Card Image"
          />
          <div className="flex mt-3 justify-center">
            <button className="buybtn border border-white text-white">
              {icon}
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="px-6 bg-[#2A2522] border-t-2 border-[#AC8A4D] pt-4 pb-2">
        <div className="flex justify-between items-center">
          <Image
            src={img}
            alt=""
            className="h-7 w-7 rounded-full border-1 border-[#AC8A4D]"
          />

          <div className="text-base text-white">
            price per card <del className="font-semibold">{price}</del>
          </div>
          <IoMdInformationCircleOutline className="text-white text-2xl " />
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardsData = [
    {
      imagePath: silver,
      jackpot: "฿ 3,000,000.00",
      cardType: "SILVER",
      price: "30.00",
      icon: <MdOutlineAddShoppingCart size={25} />,
      img: ring,
    },
    {
      imagePath: goldCard,
      jackpot: "฿ ฿ 5,555,555.00",
      cardType: "GOLD",
      price: "55.00",
      icon: <MdOutlineAddShoppingCart size={25} />,
      img: clover,
    },
    {
      imagePath: vipCard,
      jackpot: "฿ V.I.P BONUS",
      cardType: "V.I.P BONUS",
      price: "1925.00",
      icon: <MdOutlineAddShoppingCart size={25} />,
      img: kingCrown,
    },
    {
      imagePath: platCard,
      jackpot: "฿ 7,000,000.00",
      cardType: "PLATINUM",
      price: "69.00",
      icon: <MdOutlineAddShoppingCart size={25} />,
      img: star,
    },
    {
      imagePath: happy,
      jackpot: "฿ 2,000,000.00",
      cardType: "SPECIAL BIRTHDAY",
      price: "20.00",
      icon: <MdOutlineAddShoppingCart size={25} />,
      img: green,
    },
    // Add other card data objects here
  ];

  return (
    <section className="secretCard">
      <div className="mt-5 mb-5 sub_heading flex justify-center items-center gap-1 text-4xl font-semibold text-white">
        <Image src={arrowBack} alt="" className="h-3" />
        <h2 className="secretHeading">What is Raffle Game </h2>
        <Image src={arrowFace} alt="" className="h-3" />
      </div>
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className="mt-5 mb-5 sub_heading flex justify-center items-center gap-1 text-4xl font-semibold text-white">
        <Image src={arrowBack} alt="" className="h-3" />
        <h2 className="secretHeading">AVAILABLE TO BUY</h2>
        <Image src={arrowFace} alt="" className="h-3" />
      </div>
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Card;
