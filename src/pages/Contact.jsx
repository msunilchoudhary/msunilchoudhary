import React, { useState } from "react";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="main-wrap">
      <section id="contact" className="mt-30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="section-title mx-auto max-w-3xl text-center">
            <h2 className="text-5xl font-bold heading-font mb-6">
              Get in Touch
            </h2>
            <p className="text-lg max-w-lg mx-auto text-gray-600">
              Presenting Next-Generation Designs and Solutions. Create,
              Innovate, and Elevate.
            </p>
          </div>
          <div className="relative">
            <div className="relative border px-6 py-2 rounded-lg border-black/20 dark:border-white/20">
              <form className="flex flex-wrap w-full m-auto justify-between">
                <div className="sm:flex gap-6 w-full">
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="fname" className="pb-3 inline-block text-base">
                      First Name
                    </label>
                    <input
                      id="fname"
                      type="text"
                      placeholder="John"
                      className="w-full text-base px-4 rounded-lg border-black/20 dark:border-white/20 py-2.5 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                      name="firstname"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="lname" className="pb-3 inline-block text-base">
                      Last Name
                    </label>
                    <input
                      id="lname"
                      type="text"
                      placeholder="Doe"
                      className="w-full text-base px-4 rounded-lg border-black/20 dark:border-white/20 py-2.5 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                      name="lastname"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="sm:flex gap-6 w-full">
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="email" className="pb-3 inline-block text-base">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="w-full text-base px-4 rounded-lg border-black/20 dark:border-white/20 py-2.5 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="Phnumber" className="pb-3 inline-block text-base">
                      Phone Number
                    </label>
                    <input
                      id="Phnumber"
                      type="tel"
                      placeholder="+1234567890"
                      className="w-full text-base px-4 py-2.5 rounded-lg border-black/20 dark:border-white/20 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                      name="phnumber"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full mx-0 my-2.5 flex-1">
                  <label htmlFor="message" className="text-base inline-block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="Message"
                    className="w-full mt-2 px-5 py-3 rounded-lg border-black/20 dark:border-white/20 border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                    placeholder="Anything else you wanna communicate"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="mx-0 my-2.5 w-full">
                  <button
                    type="submit"
                    disabled=""
                    className="border leading-none px-6 text-lg font-medium py-4 rounded-lg 
                    bg-gray-300 text-gray-500 cursor-not-allowed"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
