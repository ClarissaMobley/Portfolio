import React from "react";
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    return (
      <nav className='bg-custom text-white px-8 md:px-16 lg:px-10 sticky top-0 z-50'>
        <div className='container mx-auto py-3 flex justify-center items-center'>
          <div className='flex w-full justify-around'>
            <Link to="/" className="hover:text-[#e4b3b3] text-md flex items-center">
              <span className="block md:hidden rounded-md shadow-lg opacity-80"><FaHome /></span>
              <span className="hidden md:block">Home</span>
            </Link>
            <Link to="/about" className="hover:text-[#e4b3b3] text-md flex items-center">
              <span className="block md:hidden rounded-md shadow-lg opacity-80"><FaUser /></span>
              <span className="hidden md:block">About Me</span>
            </Link>
            <Link to="/projects" className="hover:text-[#e4b3b3] text-md flex items-center">
              <span className="block md:hidden rounded-md shadow-lg opacity-80"><FaProjectDiagram /></span>
              <span className="hidden md:block">Projects</span>
            </Link>
            <Link to="/resume" className="hover:text-[#e4b3b3] text-md flex items-center">
              <span className="block md:hidden rounded-md shadow-lg opacity-80"><FaFileAlt /></span>
              <span className="hidden md:block">Resume</span>
            </Link>
            <Link to="/contact" className="hover:text-[#e4b3b3] text-md flex items-center">
              <span className="block md:hidden rounded-md shadow-lg opacity-80"><FaEnvelope /></span>
              <span className="hidden md:block">Contact Me</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;

