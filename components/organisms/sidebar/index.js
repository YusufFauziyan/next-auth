import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";

export default function Sidebar() {
  const router = useRouter();
  const [collapse, setCollapse] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    if (size) {
      if (size?.width < 720) {
        setCollapse(true);
        setIsMobile(true);
      } else {
        setCollapse(false);
        setIsMobile(false);
      }
    } else {
      setCollapse(true);
    }
  }, [size?.width]);

  return (
    <div className="flex">
      <div
        className={`flex flex-col h-screen  bg-sky-800 shadow ${
          collapse ? "w-20 py-3 px-1" : "w-60 p-3"
        }`}
      >
        <div className="space-y-3">
          <div
            className={`flex   justify-between pl-2 ${
              collapse ? "flex-col items-end pr-2 gap-4" : "items-center"
            }`}
          >
            <h2
              className={`text-xl font-bold text-white cursor-pointer ${
                collapse ? "order-2" : ""
              }`}
              onClick={() => router.push("/form")}
            >
              Form
            </h2>
            {collapse ? (
              <TbLayoutSidebarRightCollapse
                className={`text-white cursor-pointer hover:text-black/50 duration-150 ease-in-out text-xl `}
                onClick={() => setCollapse(!collapse)}
              />
            ) : (
              <TbLayoutSidebarLeftCollapse
                className={`text-white cursor-pointer hover:text-black/50 duration-150 ease-in-out text-xl`}
                onClick={() => setCollapse(!collapse)}
              />
            )}
          </div>

          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm hover:bg-[#000]/50 duration-200 ease-in-out relative">
                <a
                  href="#"
                  className={`flex items-center ${
                    collapse
                      ? "justify-center flex-col text-xs gap-1 text-center"
                      : ""
                  } p-2 space-x-2 rounded-md`}
                >
                  <FaWhatsapp className="text-white text-2xl" />

                  <div className="text-gray-100 pr-2">Connect WA</div>
                </a>
              </li>
              {/* <li className="rounded-sm hover:bg-[#000]/50 duration-200 ease-in-out">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-2 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <span className="text-gray-100">Inbox</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

{
  /* <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center py-4">
              <button
                type="submit"
                className="p-2 focus:outline-none focus:ring"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
            />
          </div> */
}
