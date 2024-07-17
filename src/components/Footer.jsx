import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-custom text-black text-start pl-4 text-sm flex items-center'>
            <span className='mr-auto'>Made with Blood, Sweat, and Tears.</span>
            <div className='pr-4'> &copy; Clarissa Mobley {new Date().getFullYear()}. All rights reserved.</div>
        </div>
    );
}

export default Footer;

