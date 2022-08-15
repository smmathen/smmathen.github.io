import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/20a9c515-e01a-4054-9258-788b93359aa3"
        className="flex flex-col max-w-[600px] w-full"
        target="_blank"
        rel="noreferrer"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#cf4f4f] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            {" "}
            &lt; Feel free to fill out the form to reach out to me! /&gt;{" "}
          </p>
        </div>
        <input
          className="bg-[#CCD6F6] p-2"
          type="text"
          placeholder="John Doe"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#CCD6F6]"
          type="email"
          placeholder="email@domain.com"
          name="email"
        />
        <textarea
          className="bg-[#CCD6F6] p-2"
          name="message"
          rows="10"
          placeholder="Enter your message here!"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#cf4f4f] hover:border-[#cf4f4f] px-4 py-3 my-8 mx-auto flex items-center">
          Submit!
        </button>
      </form>
    </div>
  );
};

export default Contact;
