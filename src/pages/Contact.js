import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import Navbar from "../components/Navbar";

function ContactForm() {
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
    <section className=" bg-[#0f141c] h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>
        <form
          className="flex flex-col max-w-[600px] w-full"
          onSubmit={handleSubmit}
        >
          {/* NAME INPUT  */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-bold">
              Name:
            </label>
            <br />
            <input
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
              className="shadow appearance-none border rounded w-full py-2 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* EMAIL INPUT  */}
          <div className="">
            <label className="text-white font-bold" htmlFor="email">
              Email address:
            </label>
            <br />
            <input
              className="mt-2 mb-6 p-2 bg-white w-full"
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          {/* MESSAGE TEXT AREA */}
          <div>
            <label className="text-white font-bold" htmlFor="message">Message:</label>
            <br />
            <textarea
              className="w-full my-3"
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {/* Error */}
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

export default ContactForm;
