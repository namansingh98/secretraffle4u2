import thai_man from "@/public/thai_man.png"
import philippines from "@/public/philippines_women.png"
import usa from "@/public/usa_woman.png"
import uk_man from "@/public/uk_man.jpg"
import horizontalLeft from "@/public/horizontal-left.png"
import horizontalRight from "@/public/horizontal-right.png"
import signUp from "@/public/sign-up-img.png"
import Image from "next/image"

const Testimonials = () => {
  return (
    <>    <div className=" items-center flex font-semibold justify-center text-white md:text-xl xl:text-2xl text-md ">
    <Image
      src={horizontalRight}
      alt=""
      className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]   "
    />
    <div className="flex items-center">
      &nbsp; Testimonials
      
      &nbsp; &nbsp;{" "}
      <Image
        src={horizontalLeft}
        alt=""
        className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]"
      />
    </div>
  </div>
    <div className="w-full mx-auto flex flex-wrap  justify-center">
      
      {/* Card 1 */}
      <div className="max-w-xs mx-2 my-8 text-center border-4 border-[#F5D148]  shadow-md rounded-md overflow-hidden bg_gradient flex flex-wrap justify-center ">
        <Image src={uk_man} alt="uk" className="w-1/3 rounded-full object-cover" />
        <div className="p-4">
          <h2 className="text-xl text-white font-bold  mb-2">O’Neil83 </h2>
          <h3 className="text-md text-[#F5D148] mb-2">United Kingdom</h3>
          <p className="text-white font-bold">“ Unbelievable, I have never won any prize in my life. While waiting for lucky draw game to take place. I purchased 10 scratch card and funnily enough won $250. Thanks Secret Raffle ” </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="max-w-xs mx-2 my-8 text-center border-4 border-[#F5D148] shadow-md rounded-md overflow-hidden bg_gradient flex flex-wrap justify-center " >
        <Image src={usa} alt="usa" className="w-1/3 rounded-full  object-cover" />
        <div className="p-4">
          <h2 className="text-xl text-white font-bold  mb-2">Michelle_CA </h2>
          <h3 className="text-md text-[#F5D148] mb-2">USA</h3>
          <p className="text-white font-bold">“ Had issues with depositing. Money was deducted from my bank, but didn’t show balance in my players account. Support team was helpful to find the issues and have balance added to my account. ” </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="max-w-xs mx-2 my-8 text-center border-4 border-[#F5D148] shadow-md rounded-md overflow-hidden bg_gradient flex flex-wrap justify-center ">
        <Image src={philippines} alt="philippines" className="w-1/3 rounded-full object-cover" />
        <div className="p-4">
          <h2 className="text-xl text-white font-bold  mb-2">Tala.99</h2>
          <h3 className="text-md text-[#F5D148] mb-2"> Philippines </h3>
          <p className="text-white font-bold">“ Won $1,000 on “Cops & Robbers” scratch cards. Took 4 days to receive my winnings into my Philippines BDO Uniback. Fast and easy withdrawal system. Thank you Secret Raffle 4u for this amazing platform ” </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="max-w-xs mx-2 my-8 text-center border-4 border-[#F5D148] shadow-md rounded-md overflow-hidden bg_gradient flex flex-wrap justify-center ">
        <Image src={thai_man} alt="thai man" className="w-1/3 rounded-full object-cover" />
        <div className="p-4">
          <h2 className="text-xl text-white font-bold  mb-2">Narak_Tui</h2>
          <h3 className="text-md text-[#F5D148] mb-2"> Thailand </h3>
          <p className="text-white font-bold">“ buy many many lucky draw tickets. So easy with random numbers. Can’t wait for minimum tickets to be sold so we can see who is winner. Make me winner, any position please Secret Raffle 555. Krap ” </p>
        </div>
      </div>
    </div>


    <div className="items-center flex font-semibold justify-center text-white md:text-2xl xl:text-4xl text-xl ">
        <Image
          src={horizontalRight}
          alt=""
          className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]   "
        />
        <div className="flex items-center">
          &nbsp; Sign-up Bonus
          <span className="text-[#F5D148]">
            &nbsp; &#34;DOUBLE YOUR MONEY &#34;
          </span>
          &nbsp; &nbsp;{" "}
          <Image
            src={horizontalLeft}
            alt=""
            className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]"
          />
        </div>
      </div>
      <div className="flex items-center justify-center m-5">
      <Image src={signUp} alt="sign" className="w-11/12 md:w-1/2 xl:w-1/2"/>
      </div>
    </>
  );
};

export default Testimonials;
