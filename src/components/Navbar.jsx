import React from "react";
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    return (
      <nav className='bg-custom text-white px-8 md:px-16 lg:px-10 sticky top-0 z-50'>
        <div className='container mx-auto py-3 flex justify-center items-center'>
          <div className='flex w-full justify-around'>
            <a href="#home" className="hover:text-[#e4b3b3] text-lg md:text-lg lg:text-lg flex items-center">
              <span className="block md:hidden rounded-md shadow-lg"><FaHome /></span>
              <span className="hidden md:block">HOME</span>
            </a>
            <a href="#about" className="hover:text-[#e4b3b3] text-lg flex items-center">
              <span className="block md:hidden rounded-md shadow-lg"><FaUser /></span>
              <span className="hidden md:block">ABOUT ME</span>
            </a>
            <a href="#projects" className="hover:text-[#e4b3b3] text-lg flex items-center">
              <span className="block md:hidden rounded-md shadow-lg"><FaProjectDiagram /></span>
              <span className="hidden md:block">PROJECTS</span>
            </a>
            <a href="#resume" className="hover:text-[#e4b3b3] text-lg flex items-center">
              <span className="block md:hidden rounded-md shadow-lg"><FaFileAlt /></span>
              <span className="hidden md:block">RESUME</span>
            </a>
            <a href="#contact" className="hover:text-[#e4b3b3] text-lg flex items-center">
              <span className="block md:hidden rounded-md shadow-lg"><FaEnvelope /></span>
              <span className="hidden md:block">CONTACT ME</span>
            </a>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;
