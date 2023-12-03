import arrowBack from "@/public/horizontal-right.png";
import arrowFace from "@/public/horizontal-left-white.png";
import raffleClassic from "@/public/raffle-classic.jpg";
import raffleOnline from "@/public/raffle-online.png";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import scratchOnline from "@/public/scratch-online.png";
import scratchClassic from "@/public/scratch-classic.jpg";
import lotteryClassic from "@/public/lottery-classic.jpg";
import Image from "next/image";

const Explanation = () => {
  return (
    <>
      <div className="sitebg w-full mt-10">
        <div className="flex justify-center  place-items-center ">
          <div className="main_heading ">
            <h1 className=" text-center reward_sub  text-5xl lg:text-6xl font-semibold mb-4 ">
              Game Explanation
            </h1>
            <div className=" mt-5 mb-5 sub_heading flex justify-center items-center gap-1 md:text-4xl xl:text-5xl sm:text-2xl font-semibold text-white">
              <Image src={arrowBack} alt="back" className="h-3" />
              <h2>What is Raffle Game </h2>
              <Image src={arrowFace} alt="face" className="h-3" />
            </div>
            <div className="flex justify-center justify-items-center items-center">
              <div className="w-10/12 text-[#D4C07E] ">
                A raffle is a game competition in which people buy numbered
                tickets, each of which has the chance of winning a prize, if
                their ticket is randomly drawn at a set time given by the
                organizers. A raffle may involve several separate prizes few
                dozen, few hundred or few thousand, it is up to the organizers.
                With a different ticket drawn for each prize, so a purchaser of
                a ticket may not be attracted to a specific prize, but for the
                possibility of winning any of those prizes offered. The draw for
                prizes may be held at a special event, with many onlookers and
                overseen by a club official or well-known person. In the prize
                draw, one ticket is drawn for the initial prize; that ticket is
                then left out of the container. A second ticket is then drawn
                for the next prize, and that ticket also is discarded, and so
                on. This continues until all prizes have been won.
              </div>
            </div>
            <div className="flex mt-5 text-center text-[#D4C07E] justify-center flex-col justify-items-center items-center">
              <h2 className="text-4xl">Raffle Game and Lucky Draw</h2>
              <p className="text-md mt-2">
                are popular fun time game in many countries, so we decide to
                create our own but better. Everything “Online!”, easy with a
                click of a button.
              </p>
            </div>
            <section className="relative py-20">
              <div className="container mx-auto px-4">
                <div className="items-center flex gap-2 flex-wrap">
                  <div className="w-full flex items-center justify-center md:w-4/12 ml-auto mr-auto px-4 ">
                    <Image
                      alt="raffleOnline"
                      className="w-8/12 border-2 border-white shadow-lg "
                      src={raffleClassic}
                    />
                  </div>
                  <div className="w-full md:w-5/12 ml-auto  text-[#D4C07E] mr-auto px-4">
                    <div className="md:pr-12">
                      <h3 className="text-3xl font-semibold">
                        ORIGINAL CLASSIC METHOD
                      </h3>

                      <ul className="list-none mt-6">
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xl text-white font-semibold inline-block py-1 px-2 uppercase  mr-3">
                                <IoCheckmarkDoneSharp />
                              </span>
                            </div>
                            <div>
                              <h4>
                                You would go to an event, at the entrance they
                                would usually sell you “Numbered Raffle Tickets”
                                which are in a sequence.
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
                                Once you buy these raffle tickets at the event,
                                you will have a copy and organizers have a copy
                                of your tickets.
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
                                All the “Raffle Tickets” are than put in a bowl
                                or container and someone would put their hand
                                inside the bowl and pick a ticket randomly
                                without looking inside.
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
                                The winning raffle ticket picked are than
                                checked against a collection of prizes and the
                                holder of the chosen raffle ticket wins that
                                prize
                              </h4>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="relative py-20">
              <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                  <div className="w-full md:w-5/12 ml-auto  text-[#D4C07E] mr-auto px-4">
                    <div className="md:pr-12">
                      <h3 className="text-3xl font-semibold">
                        NEW ONLINE METHOD
                      </h3>

                      <ul className="list-none mt-6">
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xl text-white font-semibold inline-block py-1 px-2 uppercase  mr-3">
                                <IoCheckmarkDoneSharp />
                              </span>
                            </div>
                            <div>
                              <h4>
                                We have created our own “Online Raffle Game”
                                system so you don’t have to go to any events,
                                you can just do it by a click of a button now.
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
                                You can buy “Raffle Tickets” for any game you
                                like, however many tickets you want.
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
                                Our system will generate your random ticket
                                numbers from the available numbers left in the
                                system.
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
                                Once we have sold the minimum amount of tickets,
                                our countdown timer will stop atomically.
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
                                Within 5 minutes of the game stopping, our
                                system will pick random tickets from all the
                                tickets sold and will allocate winners for every
                                prize position we have available.
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
                                You can than check in your user’s dashboard
                                under “My Raffle Winnings”.
                              </h4>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <Image
                      alt="raffleOnline"
                      className="max-w-full rounded-lg shadow-lg"
                      src={raffleOnline}
                    />
                  </div>
                </div>
              </div>
            </section>
            <h1 className="lg:text-6xl text-center md:text-4xl sm:text-2-xl reward_sub font-semibold ">
              What is Scratch Card Game
            </h1>
            <div className=" mt-5 mb-5 sub_heading flex justify-center items-center gap-1 md:text-4xl xl:text-5xl sm:text-2xl font-semibold text-white">
              <Image src={arrowBack} alt="back" className="h-3" />
              <h2>What is Raffle Game </h2>
              <Image src={arrowFace} alt="face" className="h-3" />
            </div>
            <div className="flex justify-center justify-items-center items-center">
              <div className="w-10/12 text-[#D4C07E] ">
                A scratch card (also called a scratch off, scratch ticket,
                scratcher, scratch-it, scratch game, scratch-and-win, instant
                game, instant lottery) is a card designed for competitions,
                often made of thin cardstock or plastic to conceal PINs, where
                one or more areas contain concealed information which can be
                revealed by scratching off an opaque covering. In some cases,
                the entire scratch card area needs to be scratched to see
                whether a prize has been won the card is printed either to be a
                winner or not, or to reveal the secret code; the result does not
                depend upon what portions are scratched off.
              </div>
            </div>
            <section className="relative py-20">
              <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                  <div className="w-full md:w-4/12 ml-auto mr-auto px-4 flex items-center justify-center">
                    <Image
                      alt="raffleOnline"
                      className="w-8/12  shadow-lg border-2 border-white"
                      src={scratchClassic}
                    />
                  </div>
                  <div className="w-full md:w-5/12 ml-auto  text-[#D4C07E] mr-auto px-4">
                    <div className="md:pr-12">
                      <h3 className="text-3xl font-semibold">
                        ORIGINAL CLASSIC METHOD
                      </h3>

                      <ul className="list-none mt-6">
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xl text-white font-semibold inline-block py-1 px-2 uppercase  mr-3">
                                <IoCheckmarkDoneSharp />
                              </span>
                            </div>
                            <div>
                              <h4>
                                When scratch cards first came out, you could
                                walk into your local groceries store and buy
                                various scratch cards with different jackpots.
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
                                Once you have purchased your scratch cards, you
                                would either use a coin or your finger to
                                scratch the card to see if you have won any
                                prizes.
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
                                All the “Raffle Tickets” are than put in a bowl
                                or container and someone would put their hand
                                inside the bowl and pick a ticket randomly
                                without looking inside.
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
                                The winning raffle ticket picked are than If you
                                have won a prize, small prize amounts can be
                                claimed at the same groceries store and for
                                bigger amounts you would have to contact the
                                number behind the scratch card to make claim of
                                your winnings.
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
                                After a month or two, you would receive a cheque
                                or bank transfer of your winnings.
                              </h4>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="relative py-20">
              <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                  <div className="w-full md:w-5/12 ml-auto  text-[#D4C07E] mr-auto px-4">
                    <div className="md:pr-12">
                      <h3 className="text-3xl font-semibold">
                        NEW ONLINE METHOD
                      </h3>

                      <ul className="list-none mt-6">
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xl text-white font-semibold inline-block py-1 px-2 uppercase  mr-3">
                                <IoCheckmarkDoneSharp />
                              </span>
                            </div>
                            <div>
                              <h4>
                                We have created our own “Online Scratch Card”
                                system with allocated winning scratch cards
                                which are set-up the same way as you would buy
                                them from your local groceries store.
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
                                With our online method, any prize amount you win
                                from the “Free Scratch Cards” or the “Purchased
                                Scratch Cards” you will instantly get your
                                winnings in your “Account” under “My Wallet and
                                My Winnings".
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
                                Which you can than withdraw to a bank of your
                                choice in any country around the world.
                              </h4>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center md:w-4/12 ml-auto mr-auto px-4">
                    <Image
                      alt="raffleOnline"
                      className="w-8/12 rounded-lg shadow-lg"
                      src={scratchOnline}
                    />
                  </div>
                </div>
              </div>
            </section>
            <div className="main_heading ">
              <div className=" mt-5 mb-5 sub_heading flex justify-center items-center gap-1 md:text-4xl xl:text-5xl sm:text-2xl font-semibold text-white">
                <Image src={arrowBack} alt="back" className="h-3" />
                <h2>What is Lottery Game </h2>
                <Image src={arrowFace} alt="face" className="h-3" />
              </div>
              <div className="flex justify-center justify-items-center items-center">
                <div className="w-10/12 text-[#D4C07E] ">
                  A lottery (or lotto) is a form of game that involves the
                  drawing of numbers at random for a prize. This lottery numbers
                  are randomly picked by an official member from the government
                  organization. Lotteries come in many formats. For example, the
                  prize can be a fixed amount of cash or goods. Many lotteries
                  allow buyers to select the numbers on the lottery ticket,
                  resulting in the possibility of multiple winners by matching
                  only two numbers, three numbers, four numbers and so on, to
                  win the main jackpot you would have to picked the same numbers
                  as the official lottery numbers to win the main jackpot.
                </div>
              </div>
              <section className="relative py-20">
                <div className="container mx-auto px-4">
                  <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4 flex items-center justify-center">
                      <Image
                        alt="raffleOnline"
                        className="w-8/12  shadow-lg border-2 border-white "
                        src={lotteryClassic}
                      />
                    </div>
                    <div className="w-full md:w-5/12 ml-auto  text-[#D4C07E] mr-auto px-4">
                      <div className="md:pr-12">
                        <h3 className="text-3xl font-semibold">
                          ORIGINAL CLASSIC METHOD
                        </h3>

                        <ul className="list-none mt-6">
                          <li className="py-2">
                            <div className="flex items-center">
                              <div>
                                <span className="text-xl text-white font-semibold inline-block py-1 px-2 uppercase  mr-3">
                                  <IoCheckmarkDoneSharp />
                                </span>
                              </div>
                              <div>
                                <h4>
                                  You would go to your local licensed lottery
                                  tickets vendor and various groceries and super
                                  stores before a certain time.
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
                                  Once you buy these raffle tickets at the
                                  event, you will have a copy and organizers
                                  have a copy of your tickets.
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
                                  In the shop/store, you would take a blank
                                  lottery ticket and start choosing your
                                  numbers, or you would buy lottery tickets with
                                  various numbers on them already.
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
                                  Once the lottery draw has been done, you would
                                  check to see if you have won anything, if yes
                                  you would follow the process behind the
                                  lottery ticket to claim your winnings.
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
                                  Similar process to claiming your winnings from
                                  “Scratch Cards”.
                                </h4>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explanation;
