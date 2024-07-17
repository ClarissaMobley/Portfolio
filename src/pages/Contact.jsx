import React from 'react';


const Contact = () => {
    return (
        <div className='py-20' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h3 className='text-4xl font-bold text-center mb-12 text-white'>Let's get in touch!</h3>
                <div className='flex justify-center'>
                    <div className="w-full max-w-lg">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="text-white block mb-2 text-xl">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name"
                                    className="w-full p-2 rounded bg-white border border-[#e4b3b3] focus:outline-none focus:border-[#e4b3b3]" 
                                    placeholder="Name" 
                                    aria-label="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-white block mb-2 text-xl">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email"
                                    className="w-full p-2 rounded bg-white border border-[#e4b3b3] focus:outline-none focus:border-[#e4b3b3]" 
                                    placeholder="Email" 
                                    aria-label="Your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="text-white block mb-2 text-xl">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message"
                                    className="w-full p-2 rounded bg-white border border-[#e4b3b3] focus:outline-none focus:border-[#e4b3b3]" 
                                    rows='5' 
                                    placeholder="Message" 
                                    aria-label="Message"
                                />
                            </div>
                            <button 
                                type="submit"
                                className="btn bg-[#b77676] text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-lg w-full text-xl"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
