import React from "react";
import aboutus from "@/public/aboutus.jpg";
import Image from "next/image";
const About = () => {
  return (
    <div className="Promotions flex flex-col flex-wrap content-center justify-items-center mt-10">
        <div className="w-full sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 mx-auto">
        <Image src={aboutus} alt="About us" className="mx-auto" />
      </div>
      <div className="w-full sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 mx-auto text-white">
        <div className="flex justify-center flex-col">
          <h1 className="text-4xl mb-5 text-center text-[#009900] font-semibold">
            About Us
          </h1>
          <div className="sm:p-5">
          <h2 className="mt-5 text-xl mb-5">
            Information About Secret Raffle 4U
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Take your chance to win the world’s biggest jackpots in SE Asia.
            <br />
            At Secret Raffle 4U you can bet on the outcome of the biggest and
            best Raffle Games and Scratch Cards that SE Asia has to offer at a
            fraction of the prices you would usually find in western countries
            or at live events.
            <br />
            We have a diverse staff of over 100 employees, from 15 countries,
            and we are growing rapidly. Getting in touch with us is easy, Our
            friendly customer care team are available via Live Chat and through
            "Social Media Platforms" and will be able to assist you with any
            questions you have.
          </p>
          <h2 className="mt-5 text-xl mb-5">
            We Have Got A Wide Range of Exciting Games
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            a. Raffle Games just for you to have a chance to win on a daily,
            weekly, monthly and yearly, with raffle payout main jackpot prizes
            starting from $1,500 to $555,555
            <br />
            <br />
            b. Scratch Cards with main jackpot prizes from $27,900 to $279,712
            <br />
            <br />
            With us every month you can take the chance to become a millionaire!
            with our monthly games. At Secret Raffle 4U, if you hit any of the
            prize tiers, you win! and we will pay you out.
            <br />
            <br />
            For all intents and purposes, you will have the same experience as
            if you are playing at a live event. The difference is that we have
            created a online platform to enjoy this experience without having to
            go to any events anymore, buy your tickets, and we pay you if you
            win.
            <br />
            <br />
            At Secret Raffle 4U we can guarantee you will be paid out on your
            winnings - regardless of the jackpot amount.
            <br />
            <br />
            In order for us to make the larger prize tier payments we take out
            insurance policies to cover the eventuality of a Jackpot win or a
            substantial payout.
          </p>
          <h2 className="mt-5 text-xl mb-5">Want To Know The Finer Details?</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Secret Raffle 4U was established in 7th August 2021 and is privately
            owned.
            <br />
            <br />
            Secret Raffle 4U and this website is operated by EU International
            Gaming Ltd.
            <br />
            <br />
            Secret Raffle 4U is a online gaming platform, and all prizes and
            jackpots are custom made by us. Secret Raffle 4U allows Customers to
            buy multiple raffle tickets and scratch cards, when a customer wins
            a raffle game or scratch card, then they will be paid directly by
            Secret Raffle 4U.
          </p>
          <h2 className="mt-5 text-xl mb-5">
            We Are in Process for Our Online Gaming License from ST. Vincent and
            The Grenadines eGaming
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            We are registered with and regulated by ST. Vincent and The
            Grenadines Gambling Commission. In order for us to retain these
            licenses we have to prove that we are able to make the required
            payouts to our players should they win and that we have the correct
            procedures in place to guarantee this.
            <br />
            We are based in UK and our Head Office is based in ST. Vincent and
            The Grenadines, a worldwide hub for the online gaming industry.
          </p>
          <h2 className="mt-5 text-xl mb-5">
            Persons under 18 years of age are not permitted to play on our
            platform.
          </h2>
          <h2 className="mt-5 text-xl mb-5">Changing Lives Responsibly</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            We help you to have a chance to dream. Our games are fun and
            exciting, and should always remain so. That's why for us, players
            are the first priority.
            <br />
            What does this mean to you? It means we always encourage Healthy
            Play. It means lots of people playing a little, rather than a few
            playing a lot. We are all about changing lives for the better.
          </p>
          <h2 className="mt-5 text-xl mb-5">
            <br />
            Thank you kindly for your understanding and patients,
            <br />
            <br />
            Kind Regards,
            <br />
            <br />
            Secret Raffle 4U Management.
          </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
