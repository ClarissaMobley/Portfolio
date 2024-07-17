import React from 'react';

const Footer = () => {
    return (
        <div className='bg-custom text-black text-start pl-4 text-sm md:text-base lg:text-lg flex items-center'>
            <span className='mr-auto'>Made with Blood, Sweat, and Tears.</span>
            <div className='pr-4'> &copy; Clarissa Mobley {new Date().getFullYear()}. All rights reserved.</div>
        </div>
    );
}

export default Footer;

