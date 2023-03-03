/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen flex justify-center items-center bg-[#0a192f]">
      <form action="#" className="flex flex-col max-w-[600px]">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline">Contact</p>
          <p className="text-gray-300 py-4">// Submot the form below or shoot me an mail - sumonpaul3217@gmail.com</p>
        </div>
        <input className="p-2 bg-[#ccd6f6]" type="text" placeholder="Name" name="name" />
        <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="email" name="name" />
        <textarea className="bg-[#ccd6f6] p-2" name="message" placeholder="Your message here" rows="4"></textarea>
        <button className="text-white border-2 my-8 px-5 py-3 flex items-center justify-center mx-auto hover:bg-pink-600 hover:border-pink-600">Let's collborate</button>
      </form>
    </div>
  );
};

export default Contact;
