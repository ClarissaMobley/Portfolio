import React from 'react';

const Contact = () => {
    return (
        <div className='text-white py-20' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h3 className='text-4xl font-bold text-center mb-12'>Let's get in touch!</h3>
                <div className='flex justify-center'>
                    <div className="w-full max-w-lg">
                        <form className="space-y-4">
                            {['name', 'email', 'message'].map((field, index) => (
                                <div key={index}>
                                    <label htmlFor={field} className="block mb-2 text-xl">
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    {field === 'message' ? (
                                        <textarea
                                            id={field}
                                            name={field}
                                            className="w-full p-2 rounded bg-white border border-[#e4b3b3] focus:outline-none focus:border-[#e4b3b3]"
                                            rows="5"
                                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                            aria-label={field.charAt(0).toUpperCase() + field.slice(1)}
                                        />
                                    ) : (
                                        <input
                                            type={field === 'email' ? 'email' : 'text'}
                                            id={field}
                                            name={field}
                                            className="w-full p-2 rounded bg-white border border-[#e4b3b3] focus:outline-none focus:border-[#e4b3b3]"
                                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                            aria-label={field.charAt(0).toUpperCase() + field.slice(1)}
                                        />
                                    )}
                                </div>
                            ))}
                            <button 
                                type="submit"
                                className="bg-gradient-to-r from-[#e4b3b3] to-blue-500 text-white font-bold transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-lg w-full text-xl"
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
