import React from 'react'
import MeImage from '../assets/MainPage.png'
import FullStack from '../assets/full-stack-test-2.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Header = () => {
    return (
        <div className='bg-custom text-white py-20' id='home'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='flex flex-col md:flex-row items-center md:space-x-12 animate-fadeIn'>
                    <div className='flex-1'>
                        <div className='flex flex-col items-center'>
                            <img 
                                src={FullStack} 
                                alt="" 
                                className='w-72 h-auto md:w-96 lg:w-[500px] xl:w-[600px] mb-8 md:mb-0'
                            />
                            <div className='flex space-x-4 mt-4'>
                                <a href="www.linkedin.com/in/clarissa-mobley-30a49047"
                                target="_blank" rel='noopener noreferrer' className='rounded-md shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-125'>
                                    <FaLinkedin size={40} />
                                </a>
                                <a href="https://github.com/ClarissaMobley"
                                target="_blank" rel='noopener noreferrer' className='rounded-md shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-125'>
                                    <FaGithub size={40} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <img 
                        src={MeImage} 
                        alt="" 
                        className='mx-auto mb-8 w-96 rounded-2xl object-cover transform transition-transform duration-300 hover:scale-105'
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
