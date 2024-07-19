import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post('https://www.clarissamobley.com/api/contact', formData);
      navigate('/message-sent');
    } catch (error) {
      console.error('Error:', error);
      navigate('/error');
    }
  };

  return (
    <div className='py-20' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h3 className='text-4xl font-bold text-center mb-12 text-white'>Get in touch!</h3>
        <div className='flex justify-center'>
          <div className="w-full max-w-lg">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="text-white block mb-2 text-xl">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 rounded bg-white border border-[#e4b3b3] focus:outline-none focus:border-[#e4b3b3]"
                  placeholder="Name"
                  aria-label="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-black mt-1">{errors.name}</p>}
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
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-black mt-1">{errors.email}</p>}
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
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="text-black mt-1">{errors.message}</p>}
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






