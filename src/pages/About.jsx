import React from 'react';
import AboutMeImage from '../assets/aboutme.png';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostgresql, SiRender } from 'react-icons/si';

const About = () => {
    return (
        <div className='bg-custom text-white py-10 md:py-20' id='about'>
            <div className='container mx-auto px-4 md:px-8 lg:px-16'>
                <div className='flex flex-col md:flex-row items-center md:space-x-12 animate-fadeIn'>
                    <img src={AboutMeImage} alt="About Me" className='w-full md:w-96 mb-8 md:mb-0 hover:scale-105 transition-transform duration-300' />
                    <div className='flex-1'>
                        {/* <h2 className='text-4xl md:text-6xl text-[#e4b3b3] font-bold text-start mb-4 md:mb-6'>About Me</h2> */}
                        <h3 className='text-xl md:text-4xl font-bold mb-3'>I'm Clarissa Mobley, a Full-Stack Developer based in Atlanta, GA.</h3>
                        <p className='text-sm md:text-base mb-6'> I have a solid foundation in HTML, CSS, and JavaScript. Before transitioning into tech, 
                            I spent 11 years in the set decoration department for films, where I developed a strong eye for visual storytelling 
                            and attention to detail. This experience helped shape my approach to web development, enabling me to create applications 
                            that are both visually appealing and functional.
                        </p>
                        <p className='text-sm md:text-base mb-6'> In my journey to become a developer, I have learned to work with a variety of technologies, 
                            including the MERN stack (MongoDB, Express, React, and Node.js). This has allowed me to build full-stack applications that 
                            are responsive, scalable, and user-friendly. I'm also always eager to learn new technologies and expand my skill set.
                        </p>
                        <p className='text-sm md:text-base mb-6'>
                            I enjoy the entire process of web development, from concept to deployment. As I continue to expand my skills and explore new 
                            technologies, I'm committed to solving complex problems and delivering solutions. Whether it's creating RESTful APIs, implementing 
                            responsive design, or optimizing database performance, I'm focused on making sure that I meet and exceed the needs of users.
                        </p>
                        <div className='w-full bg-[#b77676] mt-8 p-4 flex flex-wrap justify-center space-x-2 md:space-x-4 rounded-lg'>
                            <FaHtml5 className='text-white hover:scale-125 transition-transform duration-300 text-2xl md:text-3xl' />
                            <FaCss3Alt className='text-white hover:scale-125 transition-transform duration-300 text-2xl md:text-3xl' />
                            <FaJs className='text-white hover:scale-125 transition-transform duration-300 text-2xl md:text-3xl' />
                            <FaReact className='text-white hover:scale-125 transition-transform duration-300 text-2xl md:text-3xl' />
                            <FaNodeJs className='text-white hover:scale-125 transition-transform duration-300 text-2xl md:text-3xl' />
                            <SiExpress className='text-white hover:scale-125 transition-transform duration-300 text-2xl md:text-3xl' />
                            <SiMongodb className='text-white hover:scale-125 transition-transform duration-300 text-2xl md:text-3xl' />
                            <SiPostgresql className='text-white hover:scale-125 transition-transform duration-300 text-2xl md:text-3xl' />
                            <FaGithub className='text-white hover:scale-125 transition-transform duration-300 text-2xl md:text-3xl' />
                            <SiRender className='text-white hover:scale-125 transition-transform duration-300 text-2xl md:text-3xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

