import React from 'react';

const MessageSent = () => {
  return (
    <div className="py-20" id="message-sent">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h3 className="text-4xl font-bold text-center mb-12 text-white">Message Sent!</h3>
        <p className="text-center text-white">Thank you for your message. I'll get back to you soon as possible.</p>
      </div>
    </div>
  );
};

export default MessageSent;