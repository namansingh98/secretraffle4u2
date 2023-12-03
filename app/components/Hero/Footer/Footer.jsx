import phonePe from "@/public/phonepe.png";
import paypal from "@/public/paypal.png";
import expat from "@/public/expat.png";
import plus from "@/public/18plus.png";
import responsibly from "@/public/responsibly.png";
import satisfaction from "@/public/satisfaction.png";
import guaranteed from "@/public/guaranteed.png";

import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#252A25]  py-12 mt-10">
      <div className="container mx-auto justify-center items-center  flex flex-wrap">
        {/* First Column */}
        <div className="w-full flex flex-col items-center justify-center  md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
          <Image src={logo} alt="logo" className="w-[50%] " />
          <h2 className="text-md  mb-4 text-center  text-white">
            Website is operated by EU International Gaming Ltd.
          </h2>
        </div>
    
        {/* Second Column */}
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-[#F5D148]">
            Information
          </h2>
          <ul className="list-none flex flex-col text-white text-xl leading-10 font-semibold">
            <Link href="/terms">Terms and Condition</Link>
            <Link href="/privacy">Privacy and Policy</Link>
            <Link href="/aboutus">About Us</Link> 
            <Link href="/contactus">Contact Us</Link>
            <Link href="/faq">FAQs</Link>
            <Link href="/payment">Payment Guaranteed Policy</Link>
            <Link href="/promotion">Promotions Details</Link>
          </ul>
        </div>

        {/* Third Column */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col ">
          {/* First Row */}
          <div className="flex flex-col flex-wrap items-center mb-4">
            <h2 className="text-2xl  text-[#F5D148]  font-bold mr-4">
              Security & Game Integrity
            </h2>
            {/* Add 4 images here */}
            <div className="flex gap-3 flex-wrap flex-row">
              <Image src={plus} alt="18plus" className="w-[130px]  " />
              <Image
                src={responsibly}
                alt="responsibly"
                className="w-[130px]  "
              />
              <Image
                src={satisfaction}
                alt="satisfaction"
                className="w-[130px]  "
              />
              <Image src={guaranteed} alt="guaranteed" className="w-[130px] " />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex  flex-col items-center">
            <h2 className="text-2xl text-[#F5D148] font-bold mr-4">
              Payment Partner
            </h2>
            {/* Add 3 images here */}
            <div className="flex  flex-wrap gap-3 flex-row">
              <Image src={phonePe} alt="phonepe" className="w-[130px]  " />

              <Image src={expat} alt="expat" className="w-[130px]  " />
              <Image src={paypal} alt="paypal" className="w-[130px] " />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-8 text-center bg-[#252A25] py-4">
        <p className="text-xl font-semibold text-white">
          Copyright © 2021 EU International Gaming Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
