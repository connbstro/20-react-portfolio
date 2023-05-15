import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import Navbar from "../components/Navbar";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  return (
    <section>
      <Navbar />
      <div
        name="contact"
        className="w-full h-screen bg-[#0f141c] flex justify-center items-center"
      >
        <form
          className="flex flex-col max-w-[600px] w-full"
          onSubmit={handleSubmit}
        >
          <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
            <p className="text-4xl inline border-b-4 border-[#fad1a1] text-white">
              Contact
            </p>
            <p className="text-white py-4">
              Send me a message or email me at --- connbstro56@yahoo.com
            </p>
          </div>
          {/* Name input */}
          <div>
            <label htmlFor="name" className="text-white font-bold mb-4">
              Name:
            </label>
            <br />
            <input
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
              className="mt-4 mb-4 p-2 shadow appearance-none border rounded w-full py-2 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Email input  */}
          <div className="">
            <label className="text-white font-bold mb-4" htmlFor="email">
              Email address:
            </label>
            <br />
            <input
              className="mt-4 mb-4 p-2 bg-white w-full"
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          {/* Textarea field */}
          <div>
            <label className="text-white font-bold mb-4" htmlFor="message">
              Message:
            </label>
            <br />
            <textarea
              className="mt-4 mb-4 w-full my-3"
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {/* Error field */}
          {errorMessage && (
            <div>
              <p className="error-text text-red-500">{errorMessage}</p>
            </div>
          )}
          <button
            className="rounded-md text-white border-2 hover:bg-[#fad1a1] hover:border-[#fad1a1] hover:text-black px-4 py-3 my-8 mx-auto flex items-center"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
