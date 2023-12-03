import React from "react";
import paymentimg from "@/public/payment.png";
import Image from "next/image";
const Payment = () => {
  return (
    <div className="Promotions flex flex-col flex-wrap content-center justify-items-center mt-10">
      <div className="w-10/12  flex flex-wrap  justify-center">
        <Image src={paymentimg} alt="Term & condition" />
      </div>

      <div className="w-[80%] justify-center text-white">
        <div className="flex justify-center flex-col">
          <h1 className="text-4xl text-center text-[#009900] font-semibold">
            Payment Guarantee Policy
          </h1>
          <h2 className="text-xl mb-5 mt-5">
            How do I know if I have won the raffle or lottery? And how much?
          </h2>
          <p>
            In the 'Players Account' section, there are multiple tabs which will
            show your chosen games for any games you have purchased, along with
            the actual winning numbers drawn for the lottery draw you have bet
            on. Winning numbers that match the actual number will say “winning
            ticket”, and you are shown the total number of matches. The Winnings
            section will show you your winnings.
          </p>
          <h2 className="mt-5 text-xl mb-5">
            How does the withdrawal to my bank work?
          </h2>
          <p>
            To collect your winnings, you must specify the bank account you
            would like to be paid into, and the amount of your balance that you
            wish to withdraw. To ensure that only you get paid for your
            winnings, and to prevent money laundering, we require that the
            account to be paid into must be in the name of the player and be in
            their country of residence. The withdrawn funds will usually be
            deposited in your bank account within a few business days.
          </p>
          <h2 className="mt-5 text-xl mb-5">
            Is the payout guaranteed? How do I know?

          </h2>
          <p>At Secret Raffle 4U we can guarantee you will be paid out on your winnings - regardless of the jackpot amount.
<br />
<br />
For all intents and purposes, you will have the exact same customer experience as if you were playing the actual game in any of these countries yourself or you are buying a raffle ticket at any live event. The key difference is that we pay you if you win. We are able to achieve this in two ways.
<br />
<br />

For all prize tier payments we make the payment directly from the fund we have from the total "Raffle Tickets" sales.
<br />
<br />

In order for us to fulfill the larger prize tier payments we take have taken out insurance policies to cover the eventuality of a Jackpot win or a substantial large payout at Secret Raffle 4U. Part of our ticket sales price you pay goes towards the payment of this insurance policy to guarantee you receive your jackpot winnings
<br />
<br />

We are currently registering with the "St. Vincent and the Grenadines Gambling Commission" followed by the "UK Gambling Commission". In order for us to retain these licenses we have to prove that we are able to make the required payouts to our players should they win and that we have the correct procedures in place to guarantee this.

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
  );
};

export default Payment;
