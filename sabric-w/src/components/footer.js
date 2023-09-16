import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

function footer() {
  const inputPlaceholder = "name@email.com";
  const inputType = "email";
  const trialBtnText = "start 14 days free trial";
  const home = "/";
  return (
    <div>
      <div className="w-full bg-violet-700 text-center px-8 py-10 border-b-[0.1px]  border-gray-200">
        <h1 className="text-white text-5xl font-bold mb-3">
          It's easy to get started. Start now
        </h1>
        {/* inputs */}
        <div className="w-full flex flex-col gap-2 mb-4">
          <input
            type={inputType}
            placeholder={inputPlaceholder}
            className="p-5 text-black bg-white font-light rounded-lg border border-0.5 outline-none font-sans"
          />

          <div className="bg-orange-600 text-white rounded-md flex justify-center items-center capitalize p-3 font-normal text-normal lg:text-md lg:mb-64 lg:font-semibold lg:text-medium cursor-pointer lg:hover:opacity-70">
            <p>{trialBtnText}</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-violet-700 text-left px-8 py-10 border-b-[1px] border-gray-50 border-opacity-40">
        <div className="py-4 flex flex-col gap-5">
          <img
            src="./assets/sabric-logo.png"
            alt="sabric logo"
            className="w-2/5"
          />
          <p className="text-white">
            The best medicines & biggest brands within 30 minutes at your home.
            Experience the power of MedCartel today.
          </p>
        </div>

        <div className="capitalize text-white flex flex-col gap-4 mb-4">
          <h1 className="text-gray-200">Company</h1>
          <Link to={home}>about us</Link>
          <Link to={home}>privacy policy</Link>
          <Link to={home}>terms & conditions</Link>
          <Link to={home}>contact</Link>
        </div>
        <div className="capitalize text-white flex flex-col gap-4 mb-4">
          <h1 className="text-gray-200 capitalize">more templates</h1>
          <a
            href="https://nexo.framer.website/"
            target="_blank"
            rel="noreferrer"
          >
            nexo
          </a>
          <a
            href="https://plumby.framer.website/"
            target="_blank"
            rel="noreferrer"
          >
            plumby
          </a>
          <a
            href="https://clowd.framer.website/"
            target="_blank"
            rel="noreferrer"
          >
            clowd
          </a>
          <a
            href="https://simplly.framer.website/"
            target="_blank"
            rel="noreferrer"
          >
            simplly
          </a>
        </div>
        <div className="text-white">
          <h1 className="text-gray-200 capitalize py-4">contact details</h1>
          <div className="flex gap-3 w-4/5 capitalize mb-3">
            {/* icon */}
            <MdLocationOn size={28} className="text-white" />
            <p>Amsterdam, Netherlands</p>
            {/* text */}
          </div>

          <div className="flex gap-3 w-full capitalize mb-3">
            {/* icon */}
            <FaPhoneAlt size={16} className="text-white" />
            <p className="flex flex-col gap-1">
              <span>+1 62 19 22 705</span>
              <span>7 Days - 8am - 10pm</span>
            </p>
            {/* text */}
          </div>

          <div className="flex gap-3 mb-3">
            {/* icon */}
            <TbMailFilled size={20} className="text-white" />
            <p>info@framerbite.com</p>
            {/* text */}
          </div>
        </div>
        <div className="h-[0.5px] w-10/12 border-b-2 border-gray-100 border-opacity-30 mt-10 mb-10"></div>
        <div className="flex flex-auto gap-2 justify-between text-sm capitalize text-white">
          <p className="w-2/5">© 2023 FramerBite, all rights reserved</p>
          <div className="w-3/5 flex justify-evenly">
            <FaSquareFacebook size={18} />
            <AiOutlineTwitter size={18} />
            <FaInstagram size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
