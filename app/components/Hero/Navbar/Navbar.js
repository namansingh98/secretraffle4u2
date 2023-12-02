"use client"
import { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "@/public/logo.png";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  //   const [locale, setLocale] = useState(defaultLocale);

  const [isOpen, setIsOpen] = useState(false);

  //   console.log(locale)

  return (
    <div>
      <div className="banner w-full bg-[#212529] flex items-center place-content-center ">
        <Image src={logo} alt="logo" className="w-1/2 md:w-1/3 xl:w-1/5 m-5" priority/>
      </div>
      <nav className="bg-[#487644]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center  h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className="  text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    href="/LuckGames"
                    className="text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Lucky Draw Games
                  </Link>

                  <Link
                    href="/secretcards"
                    className="text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Scratch Card
                  </Link>

                  <Link
                    href="/gameExplanation"
                    className="text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Game Explanation
                  </Link>

                  <Link
                    href="/reward"
                    className="text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Rewards
                  </Link>

                  <Link
                    href="/login"
                    className="text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Register/Login
                  </Link>
                </div>

                {/* <select onChange={event => setLocale(event.target.value)}>
          {supportedLanguages.map(locale => (
            <option value={locale} key={locale}>
              {locale}
            </option>
          ))}
          </select> */}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-[#487644] inline-flex items-center justify-start p-2 rounded-md text-white hover:text-white hover:bg-[#487644] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#487644] focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </Link>

                <Link
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </Link>

                <Link
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </Link>

                <Link
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </Link>

                <Link
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
