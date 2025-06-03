import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      {/* -----------Left Section of footer -------------- */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          {/* <h3>For Clients</h3> */}
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Unity Health is a trusted platform for people who want to find the
            correct doctor for their disease. We trying to find the best doctor
            for you in a very quick time.
          </p>
          {/* <h3>For Doctor’s</h3> */}
        </div>
        {/* -----------Middle Section of footer -------------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* -----------Right Section of footer -------------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>011-23063024, 011-23063513</li>
            <li>akashkumar132003@gmail.com</li>
          </ul>
        </div>
        {/*--------- Copyright ---------  */}
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ Unity Health. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
