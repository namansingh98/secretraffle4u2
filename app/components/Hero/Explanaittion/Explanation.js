import horizontalLeft from "@/public/horizontal-left.png";
import horizontalRight from "@/public/horizontal-right.png";
import deposit_withdraw from "@/public/deposit_withdraw.png";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import Image from "next/image";
const Explanation = () => {
  return (
    <>
      <div className="service_title items-center flex flex-col font-semibold justify-center text-white md:text-2xl xl:text-4xl text-md mb-5 mt-10">
        <div className="flex justify-center justify-items-center items-center">
          <Image
            src={horizontalRight}
            alt="right"
            className="w-[40px] h-[10px] md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] "
          />
          <div className="sm:block sm:text-center xs:block xs:text-center  lg:flex md:flex  items-center text-md md:text-md xl:text-xl">
            &nbsp;
            <div className="flex justify-center ">
              {" "}
              &nbsp; Easy Steps to Sign-Up and
            </div>
            <div className="text-[#F5D148]">
               get $15 FREE to &#34;Play&#34; &nbsp;
            </div>
          </div>
          <Image
            src={horizontalLeft}
            alt="left"
            className="w-[40px] h-[10px] md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] "
          />
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-wrap justify-center items-center gap-4 p-4">
          {/* Card 1 */}
          <div className="w-[200.714px] h-[220.436px;] bg-[#F5D148] border border-[#F5D148] cliped p-[1px] ">
            <div className="w-[195px] h-[217px] card_explanation border-1 border-[#F5D148] text-white p-6 rounded-lg text-center">
              <h2 className="text-[22px]  mb-4">Step 1</h2>
              <p className="text-[14px]">
                Create an “Account” and get $15 FREE , please follow
                instructions in your account.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[200.714px] h-[220.436px;] bg-[#F5D148] border border-[#F5D148] cliped p-[1px] ">
            <div className="w-[195px] h-[217px] card_explanation border-1 border-[#F5D148] text-white p-6 rounded-lg text-center">
              <h2 className="text-[22px]  mb-4">Step 2</h2>
              <p className="text-[14px]">
                Buy “Raffle Tickets” for any games you like. All your tickets
                will be under “My Raffle Tickets” in your “Players Dashboard”.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[200.714px] h-[220.436px;] bg-[#F5D148] border border-[#F5D148] cliped p-[1px] ">
            <div className="w-[195px] h-[217px] card_explanation border-1 border-[#F5D148] text-white p-6 rounded-lg text-center">
              <h2 className="text-[22px]  mb-4">Step 3</h2>
              <p className="text-[14px]">
                {" "}
                Wait for “Minimum Tickets” to be sold. our system will pick
                “Random Winners” From tickets sold.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-[200.714px] h-[220.436px;] bg-[#F5D148] border border-[#F5D148] cliped p-[1px] ">
            <div className="w-[195px] h-[217px] card_explanation border-1 border-[#F5D148] text-white p-6 rounded-lg text-center">
              <h2 className="text-[22px]  mb-4">Step 4</h2>
              <p className="text-[14px]">
                Once the game is over. You can instantly withdraw your “Prize
                Winnings”.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="w-[200.714px] h-[220.436px;] bg-[#F5D148] border border-[#F5D148] cliped p-[1px] ">
            <div className="w-[195px] h-[217px] card_explanation border-1 border-[#F5D148] text-white p-6 rounded-lg text-center">
              <h2 className="text-[22px]  mb-4">Step 5</h2>
              <p>Enjoy spending your &#34;Winnings&#34;.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-5 mb-2">
        <div className="items-center flex font-semibold justify-center text-white md:text-2xl xl:text-4xl text-xl ">
          <Image
            src={horizontalRight}
            alt="right"
            className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]   "
            width={"40px"}
            height={"10px"}
          />
          <div className="flex items-center">
            &nbsp; Explanation &nbsp; &nbsp;{" "}
            <Image
              src={horizontalLeft}
              alt="left"
              className="md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] w-[40px] h-[10px]"
              width={"40px"}
              height={"10px"}
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center flex-col m-8">
        <div className="w-11/12 text-white text-md leading-7">
          <h3 className="text-2xl text-center font-semibold">
            What is{" "}
            <span className="text-[#F5D148]">&#34;Online Raffle Game&#34;</span>
            ?
          </h3>
          <p>
            A raffle game is where people buy numbered tickets, each of which
            has the chance of winning a prize, if their ticket is randomly drawn
            at a set time given by the organizers. Our raffle games involve
            several separate prizes from few dozen, few hundred to few thousand.
          </p>
          <br />
          <ul>
            <li>
              {" "}
              <span className="text-[#F5D148]">✓</span> We have created an
              amazing online website so you don’t need to go anywhere to buy our
              tickets.
            </li>
            <li>
              {" "}
              <span className="text-[#F5D148]">✓</span> All your tickets are
              also backed-up on our servers for any game issues, cancelation or
              server errors.
            </li>{" "}
            <li>
              {" "}
              <span className="text-[#F5D148]">✓</span> We store ticket date so
              we know which players to refund and give tickets for next game.
            </li>
            <li>
              <span className="text-[#F5D148]">✓</span> s So, you can rest
              ensure to have a peace of mind and enjoy our games knowing your
              tickets are safely.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col m-5">
        <div className="w-11/12 text-white text-md leading-7">
          <h3 className="text-2xl text-center font-semibold">
            What is the difference between{" "}
            <span className="text-[#F5D148]  ">
              &#34;Raffle Games and Lucky Draw&#34;
            </span>
            ?
          </h3>
          <p>
            There is no difference between them. Different people from different
            part of the world has different names. ome people call it “Raffle
            Game” some people call it “Lucky Draw”.
          </p>
          <ul>
            <li>
              {" "}
              <span className="text-[#F5D148]">✓</span> “Raffle Game” and “Lucky
              Draw” have the same end results.
            </li>{" "}
            <li>
              {" "}
              <span className="text-[#F5D148]">✓</span> Someone will always win
              as long as “minimum tickets” have been sold.
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex justify-center items-center flex-col m-5">
        <div className="w-11/12 text-white text-md leading-7">
          <h3 className="text-2xl text-center font-semibold">
            What is the difference between
            <span className="text-[#F5D148]">
              &#34;Lucky Draw Games and Lottery Games&#34;
            </span>
            ?
          </h3>
          <p>
            Lucky Draw games tend to have a range of prizes available, even up
            to thousands of prizes positions. With lottery games it has minimal
            range available usually 5 – 10 various prizes. o win a lottery games
            main jackpot or the smaller prizes, you have to match all the
            numbers chosen with their numbers (for main jackpot), or some
            numbers for (smaller prizes). With Lucky Draw games, as long as
            minimum tickets are sold there is “Always a Winner” from Lucky Draw
            tickets sold, every time, every game.
          </p>
          <ul>
            <li>
              {" "}
              <span className="text-[#F5D148]">✓</span> Lucky Draw games always
              has a winner, unlike lottery games.
            </li>
            <li>
              {" "}
              <span className="text-[#F5D148]">✓</span> Win multiple prize
              positions with multiple tickets.
            </li>{" "}
          </ul>
          <div className="flex justify-center m-5">
            <button className="border border-[#F5D148] bg-[#487644] p-[3px]">
              More Details
            </button>
          </div>
        </div>
      </div>

      <div className="service_title items-center flex flex-col font-semibold justify-center text-white md:text-2xl xl:text-4xl text-md mb-5 mt-10">
        <div className="flex justify-center justify-items-center items-center">
          <Image
            src={horizontalRight}
            alt="right"
            className="w-[40px] h-[10px] md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] "
          />
          <div className="sm:block sm:text-center xs:block xs:text-center  lg:flex md:flex  items-center text-md md:text-md xl:text-xl">
            &nbsp;
            <div className="flex justify-center ">
              {" "}
              &nbsp; Prize Settlement
            </div>
            <div className="text-[#F5D148]">
            &nbsp; &#34;Deposits & Withdrawals &#34;

            </div>
          </div>
          <Image
            src={horizontalLeft}
            alt="left"
            className="w-[40px] h-[10px] md:w-[70px] md:h-[16px] xl:w-[85px] xl:h-[20px] "
          />
        </div>
      </div>




      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto  text-[#D4C07E] mr-auto px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold">NEW ONLINE METHOD</h3>

                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xl text-white font-semibold inline-block py-1 px-2 uppercase  mr-3">
                          <IoCheckmarkDoneSharp />
                        </span>
                      </div>
                      <div>
                        <h4>Global Debit/Credit Card options.</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-white mr-3">
                          <IoCheckmarkDoneSharp />
                        </span>
                      </div>
                      <div>
                        <h4>Instant Bank Transfer (Various Countries Only).</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-white mr-3">
                          <IoCheckmarkDoneSharp />
                        </span>
                      </div>
                      <div>
                        <h4>
                          Withdrawal your prize winnings via bank transfer or
                          receive through TransferWise.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-white mr-3">
                          <IoCheckmarkDoneSharp />
                        </span>
                      </div>
                      <div>
                        <h4>
                          Payment settlements from UK banks, 3–5 working days
                          some countries 24-48 hours.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-white mr-3">
                          <IoCheckmarkDoneSharp />
                        </span>
                      </div>
                      <div>
                        <h4>
                          All transactions carried out are safe and 100%
                          secured..
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <Image
                alt="deposite_withdrawl"
                className="max-w-full rounded-lg shadow-lg"
                src={deposit_withdraw}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explanation;
