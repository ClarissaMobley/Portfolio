import React from 'react';
import AboutMeImage from '../assets/aboutme.png';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostgresql, SiRender } from 'react-icons/si';

const About = () => {
    return (
        <div className='bg-custom text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='flex flex-col md:flex-row items-center md:space-x-12 animate-fadeIn'>
                    <img src={AboutMeImage} alt="" className='w-96 mb-8 md:mb-0 hover:scale-105' />
                    <div className='flex-1'>
                        <h2 className='text-6xl text-[#e4b3b3] font-bold text-start mb-6'>About Me</h2>
                        <h3 className='text-2xl text-white font-bold'>I'm Clarissa Mobley, a Full-Stack Developer based in Atlanta.</h3>
                        <p className='text-sm mb-4'> I have a solid foundation in HTML, CSS, and JavaScript. Before transitioning into tech, 
                            I spent 11 years in the set decoration department for films, where I developed a strong eye for visual storytelling 
                            and attention to detail. This experience helped shape my approach to web development, enabling me to create applications 
                            that are both visually appealing and functional.
                        </p>
                        <p className='text-sm mb-4'> In my journey to become a developer, I have learned to work with a variety of technologies, 
                            including the MERN stack (MongoDB, Express, React, and Node.js). This has allowed me to build full-stack applications that 
                            are responsive, scalable, and user-friendly. I'm also always eager to learn new technologies and expand my skill set.
                        </p>
                        <p className='text-sm mb-4'>
                            I enjoy the entire process of web development, from concept to deployment. As I continue to expand my skills and explore new 
                            technologies, I'm committed to solving complex problems and delivering solutions. Whether it's creating RESTful APIs, implementing 
                            responsive design, or optimizing database performance, I'm focused on making sure that I meet and exceed the needs of users.
                        </p>
                        <div className='w-full bg-[#b77676] mt-8 p-4 flex justify-center space-x-4 rounded-lg'>
                            <FaHtml5 size={30} className='text-white hover:scale-125' />
                            <FaCss3Alt size={30} className='text-white hover:scale-125' />
                            <FaJs size={30} className='text-white hover:scale-125' />
                            <FaReact size={30} className='text-white hover:scale-125' />
                            <FaNodeJs size={30} className='text-white hover:scale-125' />
                            <SiExpress size={30} className='text-white hover:scale-125' />
                            <SiMongodb size={30} className='text-white hover:scale-125' />
                            <SiPostgresql size={30} className='text-white hover:scale-125' />
                            <FaGithub size={30} className='text-white hover:scale-125' />
                            <SiRender size={30} className='text-white hover:scale-125' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
