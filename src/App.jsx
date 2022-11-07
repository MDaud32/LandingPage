import { useState } from 'react';
import logo from './images/logo.svg';
import intractive from './images/desktop/image-interactive.jpg';
import onePic from './images/desktop/image-deep-earth.jpg';
import onePicMob from './images/mobile/image-deep-earth.jpg';
import twoPic from './images/desktop/image-night-arcade.jpg';
import twoPicMob from './images/mobile/image-night-arcade.jpg';
import thirdPic from './images/desktop/image-soccer-team.jpg';
import thirdPicMob from './images/mobile/image-soccer-team.jpg';
import fourPic from './images/desktop/image-pocket-borealis.jpg';
import fourPicMob from './images/mobile/image-pocket-borealis.jpg';
import fivePic from './images/desktop/image-from-above.jpg';
import fivePicMob from './images/mobile/image-from-above.jpg';
import sixPic from './images/desktop/image-fisheye.jpg';
import sixPicMob from './images/mobile/image-fisheye.jpg';
import sevenPic from './images/desktop/image-curiosity.jpg';
import sevenPicMob from './images/mobile/image-curiosity.jpg';
import eightPic from './images/desktop/image-grid.jpg';
import eightPicMob from './images/mobile/image-grid.jpg';
import {
  ImTwitter,
  ImFacebook,
  ImPinterest2,
  ImInstagram,
} from 'react-icons/im';
function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="">
      <div id="hero">
        <div className="max-w-6xl mx-auto container px-6 py-12 md:px-0">
          {/* navbar and logo */}
          <nav className="flex justify-between">
            {/* logo */}
            <img src={logo} alt="" className="" />
            {/* menu */}
            <div className="hidden font-alata md:flex md:space-x-8 text-white">
              <div className="group">
                <a href="" className="">
                  About
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="" className="">
                  Careers
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="" className="">
                  Events
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="" className="">
                  Products
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="" className="">
                  Suppots
                </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
            {/* menu */}
            <div className="MOBILE-MENU flex justify-end  md:hidden absolute w-[90%] h-full">
              <div
                className="HAMBURGER-ICON space-y-2 absolute "
                onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
              >
                <span className="block h-1 w-8 animate-pulse bg-gray-100"></span>
                <span className="block h-1 w-8 animate-pulse bg-gray-100"></span>
                <span className="block h-1 w-8 animate-pulse bg-gray-100"></span>
              </div>

              <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                  <div className="group">
                    <a href="" className="">
                      About
                    </a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                  </div>
                  <div className="group">
                    <a href="" className="">
                      Careers
                    </a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                  </div>
                  <div className="group">
                    <a href="" className="">
                      Events
                    </a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                  </div>
                  <div className="group">
                    <a href="" className="">
                      Products
                    </a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                  </div>
                  <div className="group">
                    <a href="" className="">
                      Suppots
                    </a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="md:text-6xl text-3xl text-white p-4 py-10 items-left md:items-center uppercase md:max-w-lg max-w-sm border border-white my-36 ">
            impressive experiences that deliver
          </div>
        </div>
      </div>
      {/* interactive vr */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-36 px-6 relative container md:px-0">
        <img src={intractive} alt="" className="" />
        <div className="top-48 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 className="text-4xl max-w-lg mb-6 mt-10 text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
            THE LEADER IN INTERACTIVE VR
          </h2>
          <p className="text-gray-900 max-w-md">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
      {/* creation section */}
      <div className="container max-w-6xl mx-auto my-28 px-6 text-gray-900 md:px-0">
        <div className="flex justify-center mb-20 md:justify-between items-center">
          <h2 className="text-3xl uppercase text-center md:text-left md:text-5xl">
            our Creation
          </h2>
          <button className="border-2 border-black rounded-md hidden md:block text-black hover:bg-gray-100 px-8 py-3 text-xl font-semibold">
            See All
          </button>
        </div>
        {/* items container */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 justify-between uppercase text-white">
          {/* one item */}
          <div className="group relative overflow-hidden md:w-1/4">
            <img
              src={onePic}
              alt=""
              className="hidden duration-200 w-full md:block group-hover:scale-110"
            />
            <img src={onePicMob} alt="" className="w-full md:hidden" />
            <div className="gradient"></div>
            <p className="text uppercase">deep earch</p>
          </div>
          {/* two item */}
          <div className="group relative overflow-hidden md:w-1/4">
            <img
              src={twoPic}
              alt=""
              className="hidden duration-200 w-full md:block group-hover:scale-110"
            />
            <img src={twoPicMob} alt="" className="w-full md:hidden" />
            <div className="gradient"></div>
            <p className="text uppercase">Night Arcade</p>
          </div>
          {/* three item */}
          <div className="group relative overflow-hidden md:w-1/4">
            <img
              src={thirdPic}
              alt=""
              className="hidden duration-200 w-full md:block group-hover:scale-110"
            />
            <img src={thirdPicMob} alt="" className="w-full md:hidden" />
            <div className="gradient"></div>
            <p className="text uppercase">Soccer Team</p>
          </div>
          {/* four item */}
          <div className="group relative overflow-hidden md:w-1/4">
            <img
              src={fourPic}
              alt=""
              className="hidden duration-200 w-full md:block group-hover:scale-110"
            />
            <img src={fourPicMob} alt="" className="w-full md:hidden" />
            <div className="gradient"></div>
            <p className="text uppercase">Pocket Borealis</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 justify-between uppercase text-white mt-8">
          {/* five item */}
          <div className="group relative overflow-hidden md:w-1/4">
            <img
              src={fivePic}
              alt=""
              className="hidden duration-200 w-full md:block group-hover:scale-110"
            />
            <img src={fivePicMob} alt="" className="w-full md:hidden" />
            <div className="gradient"></div>
            <p className="text uppercase">From Above</p>
          </div>
          {/* six item */}
          <div className="group relative overflow-hidden md:w-1/4">
            <img
              src={sixPic}
              alt=""
              className="hidden duration-200 w-full md:block group-hover:scale-110"
            />
            <img src={sixPicMob} alt="" className="w-full md:hidden" />
            <div className="gradient"></div>
            <p className="text uppercase">Fisheye</p>
          </div>
          {/* seven item */}
          <div className="group relative overflow-hidden md:w-1/4">
            <img
              src={sevenPic}
              alt=""
              className="hidden duration-200 w-full md:block group-hover:scale-110"
            />
            <img src={sevenPicMob} alt="" className="w-full md:hidden" />
            <div className="gradient"></div>
            <p className="text uppercase">Curiosity</p>
          </div>
          {/* eight item */}
          <div className="group relative overflow-hidden md:w-1/4">
            <img
              src={eightPic}
              alt=""
              className="hidden duration-200 w-full md:block group-hover:scale-110"
            />
            <img src={eightPicMob} alt="" className="w-full md:hidden" />
            <div className="gradient"></div>
            <p className="text uppercase">Grid</p>
          </div>
        </div>
        <button className="border-2 border-black rounded-md md:hidden block text-black hover:bg-gray-100 w-full mt-8 py-3 text-xl font-semibold">
          See All
        </button>
      </div>
      <div className="bg-black text-white flex flex-col md:flex-row justify-around px-16 py-16">
        <div className="flex flex-col text-center ">
          <img src={logo} alt="" className="w-48 mb-7 mx-auto md:mx-0" />
          <div className="font-alata md:flex md:space-x-8 space-y-6 md:space-y-0 text-white">
            <div className="group">
              <a href="" className="">
                About
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="" className="">
                Careers
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="" className="">
                Events
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="" className="">
                Products
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="" className="">
                Suppots
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row text-white text-3xl gap-4 mx-auto mt-8 md:mt-0">
            <div className="">
              <ImPinterest2 />
            </div>
            <div className="">
              <ImTwitter />
            </div>
            <div className="">
              <ImInstagram />
            </div>
            <div className="">
              <ImFacebook />
            </div>
          </div>
          <div className="mt-6 text-gray-300 text-center">
            @2022 Loopsstudios. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
