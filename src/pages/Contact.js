import React, { useState } from "react";
import Navbar from "../components/Navbar";
// import { validateEmail } from "../utils/helpers";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Email", email);
    console.log("Message", message);
  };

  return (
    <div>
      <Navbar />
      <div
        name="contact"
        className="w-full h-screen bg-[#0f141c] flex justify-center items-center"
      >
        <div className="flex flex-col max-w-[600px] w-full">
          <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
            <p className="text-4xl inline border-b-4 border-[#fad1a1] text-[#fad1a1]">
              Contact
            </p>
            <p className="text-white py-4">Send me a message!</p>
          </div>

          <input
            className="bg-white p-2"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="my-4 p-2 bg-white"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="bg-white p-2"
            name="message"
            rows="10"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            className="rounded-md text-white border-2 hover:bg-[#fad1a1] hover:border-[#fad1a1] hover:text-black px-4 py-3 my-8 mx-auto flex items-center"
            type="submit"
          >
            Message Me
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
