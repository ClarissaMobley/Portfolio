import React from 'react'
import AboutMeImage from '../assets/aboutme.png'

const About = () => {
    return (
        <div className='bg-custom text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutMeImage} alt="" className='w-80 mb-8 md:mb-0'/>
                <div className='flex-1'>
                    <p className='text-lg mb-8'>I am a passionate full-stack developer with a background in graphic design. I specialize in building web applications using React, Node.js, and MongoDB. I am a quick learner and a team player who is always looking to grow and improve. I am currently seeking a full-time position as a full-stack developer.
                    </p>
                </div>
            </div>
        </div>
    </div>
)}

export default About