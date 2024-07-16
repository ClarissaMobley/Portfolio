import React from 'react'

const Navbar = () => {
    return (
        
        <nav className='bg-custom text-white px-8 md:px-16 lg:px-10'>
            <div className='container mx-auto py-2 flex justify-center items-center'>
                <div className='flex w-full justify-around'>
                    <a href="#home" className="hover:text-[#e4b3b3]">Home</a>
                    <a href="#about" className="hover:text-[#e4b3b3]">About Me</a>
                    <a href="#projects" className="hover:text-[#e4b3b3]">Projects</a>
                    <a href="#resume" className="hover:text-[#e4b3b3]">Resume</a>
                    <a href="#contact" className="hover:text-[#e4b3b3]">Contact Me</a>
                </div>
            </div>
        </nav>
     
    )
}

export default Navbar