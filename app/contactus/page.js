import Image from "next/image";
import React from "react";
import contactusimg from "@/public/contact.png";
import facethai from "@/public/facebookg.png";
import facebook from "@/public/facebook.png";
import insta from "@/public/insta.png";
import Link from "next/link";

const Contactus = () => {
  return (
    <div className="Promotions flex flex-col flex-wrap content-center justify-items-center mt-10">
      <div className="w-full sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 flex justify-center items-center">
        <Image src={contactusimg} alt="Contact us" />
      </div>

      <div className="w-full sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 mx-auto text-white">
        <div className="flex justify-center flex-col">
          <h1 className="text-4xl mb-5 text-center text-[#009900] font-semibold">
            How to contact us:
          </h1>
          <p className="text-center">
            You can contact us through the following social media platforms.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <Image src={insta} alt="instagram" />
            <Image src={facebook} alt="facebook global" />
            <Image src={facethai} alt="facebook thailan" />
          </div>
          <h2 className="mt-5 text-center text-xl mb-5">
            Our Customer Service Team: We are available 24/7, all year round. If
            you have any inquiries or concerns about Secret Raffle 4U, please do
            not hesitate to contact us by the following emails.
          </h2>

          <p className="text-xl">
            Customer Support:{" "}
            <a
              className="text-blue-500"
              href="mailto:support@secretraffle4u.com"
            >
              support@secretraffle4u.com
            </a>
            <br />
            Accounts Department:{" "}
            <a
              href="mailto:accounts@secretraffle4u.com"
              className="text-blue-500"
            >
              accounts@secretraffle4u.com
            </a>
            <br />
            Compliance Officer:{" "}
            <a
              href="mailto:compliance@secretraffle4u.com"
              className="text-blue-500"
            >
              compliance@secretraffle4u.com
            </a>
            <br />
            Report Abuse or Misconduct:{" "}
            <a
              className="text-blue-500"
              href="mailto:reportabuse@secretraffle4u.com"
            >
              reportabuse@secretraffle4u.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
