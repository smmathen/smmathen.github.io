import React, { useRef, useState } from "react";

const Contact = () => {

  const formRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://getform.io/f/20a9c515-e01a-4054-9258-788b93359aa3",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        if (formRef.current) {
          formRef.current.reset();
        }
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center pt-20"
    >
      <form
        ref={formRef}
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
        onSubmit={handleSubmit}
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
          className={`bg-[#CCD6F6] p-2 placeholder-[#0a192f] ${name ? "text-black" : "text-gray-500"
            }`}
          type="text"
          placeholder="John Doe"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          className={`my-4 p-2 bg-[#CCD6F6] placeholder-[#0a192f] ${email ? "text-black" : "text-gray-500"
            }`}
          type="email"
          placeholder="email@domain.com"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <textarea
          className={`bg-[#CCD6F6] p-2 placeholder-[#0a192f] ${message ? "text-black" : "text-gray-500"
            }`}
          name="message"
          rows="10"
          placeholder="Enter your message here!"
          value={message}
          onChange={handleMessageChange}
          required
        ></textarea>
        <button disabled={submitting} className="text-white border-2 hover:bg-[#cf4f4f] hover:border-[#cf4f4f] px-8 py-3 my-8 mx-auto flex items-center">
          {submitting ? "Submitting..." : "Submit!"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
