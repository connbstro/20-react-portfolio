import React from "react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer class="fixed bottom-0 left-0 z-20 w-full bg-[white] border-t border-[#fad1a1] shadow md:flex md:items-center md:justify-between md:p-4 dark:bg-gray-800">
      <span class="text-sm text-white sm:text-center">
        © copyright 2023 Connor Stroh
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
        <li>
          <a
            className="flex justify-between items-center w-full"
            href="mailto:connbstro56@yahoo.com"
          >
            <HiOutlineMail size={30} />
          </a>
        </li>
        <li>
          <a
            className="flex justify-between items-center w-full text-white"
            href="https://www.linkedin.com/in/connor-stroh-636a58276/"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a
            className="flex justify-between items-center w-full text-white"
            href="https://github.com/connbstro"
          >
            <FaGithub size={30} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
