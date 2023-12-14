"use client";
import React, { useState, useEffect } from "react";
import valan from "@/public/valantines.jpg";
import christmas from "@/public/christmas2.jpg";
import girl from "@/public/girl.png";
import horizontalLeft from "@/public/horizontal-left.png";
import horizontalRight from "@/public/horizontal-right.png";
import Image from "next/image";

const CardSection = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const timeDiff = calculateTimeRemaining();
      setTimeRemaining(timeDiff);

      // Check if the countdown is finished
      if (timeDiff.total <= 0) {
        clearInterval(timerInterval);
        // Add logic for when the countdown is finished
        console.log("Countdown finished!");
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  function calculateTimeRemaining() {
    const targetDate = new Date("2023-12-25T00:00:00"); // Replace with your target date
    const currentDate = new Date();

    const total = targetDate - currentDate;
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((total % (1000 * 60)) / 1000);

    return { total, days, hours, minutes, seconds };
  }

  const handleBuyNow = () => {
    // Add your logic for the "Buy Now" button here
    // For example, redirect to a purchase page
    console.log("Buy Now clicked!");
  };


  return (
    <>
      <div className=" items-center flex font-semibold justify-center text-white md:text-2xl xl:text-4xl text-md mb-5 mt-10">
        <Image
          src={horizontalRight}
          alt="right"
          className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]   "
        />
        <div className="flex items-center text-sm md:text-md xl:text-xl">
          &nbsp; Various{" "}
          <span className="text-[#F5D148]">
            &nbsp; &#34;LUCKY DRAW GAMES&#34;
          </span>{" "}
          &nbsp; &nbsp;
          <Image
            src={horizontalLeft}
            alt="left"
            className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 xl:flex-row justify-center items-center p-4 text-center">
        <div className="max-w-sm bg-cover bg-center text-white p-2 rounded-lg shadow-md cardbg-1">
          <h2 className="text-sm font-semibold mb-2">Valentine&#39;s Day</h2>
          <p className="text-2xl text-[#F5D148] font-semibold mb-2">
            Sheriff Tax Yearly Game.
          </p>
          <p className="text-2xl font-semibold mb-2">
            Jackpot Prize ฿ 33,434,382
          </p>
          <p className="text-3xl font-semibold  text-[#F5D148]">
            First Prize ฿ 5,555,555
          </p>
          <div className="flex items-center justify-center">
            <Image
              src={valan}
              alt="Card Image 1"
              className="mt-4 h-[50%] w-[60%] rounded-xl border-2 border-[#F5D148]"
            />
          </div>
          <div className="mt-2 text-lg font-bold">
            <p className="font-normal">Game ends in</p>
            <div className="flex items-centner justify-center">
              <div className="flex flex-col w-[50px]  items-center rounded-md h-[50px] bg-white text-black">
                {timeRemaining.days}
                <span className="text-[10px] font-normal bg-none"> Days</span>
              </div>
              <span className="flex items-center text-xl p-1">:</span>
              <div className="flex flex-col w-[50px] rounded-md h-[50px] bg-white text-black">
                {timeRemaining.hours}
                <span className="text-[10px] font-normal bg-none"> hours </span>
              </div>
              <span className="flex items-center text-xl p-1">:</span>

              <span className="flex flex-col w-[50px]  items-center rounded-md h-[50px] bg-white text-black">
                {timeRemaining.minutes}
                <div className="text-[10px] font-normal "> minutes</div>
              </span>
              <span className="flex items-center text-xl p-1">:</span>

              <div className="flex flex-col w-[50px] rounded-md h-[50px] bg-white text-black">
                {timeRemaining.seconds}
                <span className="text-[10px] font-normal bg-none">
                  {" "}
                  seconds
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={handleBuyNow}
            className="mt-4 px-6 py-2  bg-[#F5D148] font-bold text-white rounded-[30px] CardCounterbtn w-2/3"
          >
            Buy Now ฿ 55.00
          </button>
          <p className="mt-4">Buy multiple tickets to win multiple prizes!</p>
        </div>
        <div className="max-w-sm bg-cover bg-center text-white p-2 rounded-lg shadow-md cardbg-2">
          <h2 className="text-sm font-semibold mb-2">
            Fluffy Snowy Christmas Eve
          </h2>
          <p className="text-2xl text-[#F5D148] font-semibold mb-2">
            Sheriff Tax Yearly Game.
          </p>
          <p className="text-2xl font-semibold mb-2">
            Jackpot Prize ฿ 55,555,555
          </p>
          <p className="text-3xl font-semibold  text-[#F5D148]">
            First Prize ฿ 20,000,000
          </p>
          <div className="flex items-center justify-center">
            <Image
              src={christmas}
              alt="Card Image 1"
              className="mt-4 h-[50%] w-[60%] rounded-xl border-2 border-[#F5D148]"
            />
          </div>
          <div className="mt-2 text-lg font-bold">
            <p className="font-normal">Game ends in</p>
            <div className="flex items-center justify-center">
              <div className="flex flex-col w-[50px]  items-center rounded-md h-[50px] bg-white text-black">
                {timeRemaining.days}
                <span className="text-[10px] font-normal bg-none"> Days</span>
              </div>
              <span className="flex items-center text-xl p-1">:</span>
              <div className="flex flex-col w-[50px] rounded-md h-[50px] bg-white text-black">
                {timeRemaining.hours}
                <span className="text-[10px] font-normal bg-none"> hours </span>
              </div>
              <span className="flex items-center text-xl p-1">:</span>

              <span className="flex flex-col w-[50px]  items-center rounded-md h-[50px] bg-white text-black">
                {timeRemaining.minutes}
                <div className="text-[10px] font-normal "> minutes</div>
              </span>
              <span className="flex items-center text-xl p-1">:</span>

              <div className="flex flex-col w-[50px] rounded-md h-[50px] bg-white text-black">
                {timeRemaining.seconds}
                <span className="text-[10px] font-normal bg-none">
                  {" "}
                  seconds
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={handleBuyNow}
            className="mt-4 px-6 py-2  bg-[#F5D148] font-bold text-white rounded-[30px] CardCounterbtn w-2/3"
          >
            Buy Now ฿ 55.00
          </button>
          <p className="mt-4">Buy multiple tickets to win multiple prizes!</p>
        </div>

        <div className="max-w-sm bg-cover bg-center text-white md:p-2 rounded-lg shadow-md cardbg-3 p-9"  >
          <h2 className="text-sm font-semibold mb-2">
            Fluffy Snowy Christmas Eve
          </h2>
          <p className="text-2xl text-[#F5D148] font-semibold mb-2">
            Sheriff Tax Yearly Game.
          </p>
          <p className="text-2xl font-semibold mb-2">
            Jackpot Prize ฿ 8,466,654
          </p>
          <p className="text-3xl font-semibold  text-[#F5D148]">
            First Prize ฿ 2,000,000
          </p>
          <div className="flex items-center justify-center">
            <Image
              src={girl}
              alt="Card Image 1"
              className="mt-4  h-[60%] w-[70%] rounded-xl border-2 border-[#F5D148]"
            />
          </div>
          <div className="mt-2 text-lg font-bold">
            <p className="font-normal">Game ends in</p>
            <div className="flex items-center justify-center">
              <div className="flex flex-col w-[50px]  items-center rounded-md h-[50px] bg-white text-black">
                {timeRemaining.days}
                <span className="text-[10px] font-normal bg-none"> Days</span>
              </div>
              <span className="flex items-center text-xl p-1">:</span>
              <div className="flex flex-col w-[50px] rounded-md h-[50px] bg-white text-black">
                {timeRemaining.hours}
                <span className="text-[10px] font-normal bg-none"> hours </span>
              </div>
              <span className="flex items-center text-xl p-1">:</span>

              <span className="flex flex-col w-[50px]  items-center rounded-md h-[50px] bg-white text-black">
                {timeRemaining.minutes}
                <div className="text-[10px] font-normal "> minutes</div>
              </span>
              <span className="flex items-center text-xl p-1">:</span>

              <div className="flex flex-col w-[50px] rounded-md h-[50px] bg-white text-black">
                {timeRemaining.seconds}
                <span className="text-[10px] font-normal bg-none">
                  {" "}
                  seconds
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={handleBuyNow}
            className="mt-4 px-6 py-2  bg-[#F5D148] font-bold text-white rounded-[30px] CardCounterbtn w-2/3"
          >
            Buy Now ฿ 55.00
          </button>
          <p className="mt-4">Buy multiple tickets to win multiple prizes!</p>
        </div>
      </div>
    </>
  );
};

export default CardSection;
