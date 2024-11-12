import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { PiWhatsappLogoBold } from "react-icons/pi";
const ContactPage = () => {
  return (
    <main className="lg:py-16 container p-10 h-[93.8vh] items-center mx-auto flex justify-center ">
      <div className="justify-center  lg:min-w-full lg:min-h-[50%] rounded-3xl overflow-hidden flex lg:flex-row  flex-col-reverse  items-stretch ">
        <div className="lg:w-[55%]  px-6 py-6 flex  bg-neutral-950 justify-center  items-center flex-col gap-8 ">
          <input
            className="outline-none my-2 lg:text-xl text-lg w-full placeholder-white border-b border-b-neutral-5
            00 rounded-sm bg-transparent pb-1 "
            placeholder="name"
            name="name"
          ></input>
          <input
            className="outline-none my-2 w-full lg:text-xl text-lg placeholder-white border-b border-b-neutral-500 rounded-sm bg-transparent pb-1 "
            placeholder="email"
            name="email"
          ></input>
          <textarea
            rows={5}
            className="w-full  my-2 rounded-md lg:text-xl text-lg px-2 py-1 shadow-box-area bg-transparent "
            placeholder="Hi Aslan, I am impressed by your experience and interested in...."
          ></textarea>
          <button
            type="submit"
            className="bg-neutral-600 hover:text-white lg:text-xl text-lg px-6 py-2 rounded-md"
          >
            Send
          </button>
        </div>
        <div className="lg:w-[45%] px-6 py-6 bg-neutral-800 flex justify-between flex-col items-start">
          <div>
            <h3 className="lg:text-[42px] text-2xl text-white py-6">
              Let's get in touch
            </h3>
            <p className="lg:text-xl text-lg">
              Have a cool idea you want to bring to life or a question to
              brainstorm about ? Fill out the contact form and I will get back
              to you within 24 hours.
            </p>
          </div>
          <div>
            <p className="lg:text-xl text-lg">You may also contact me via:</p>
            <div className="flex gap-2 py-2">
              <a className="p-2 inline-block rounded-full hover:text-white lg:text-xl text-lg bg-neutral-600 text-neutral-800">
                <MdEmail />
              </a>
              <a className="p-2 inline-block rounded-full hover:text-white lg:text-xl text-lg bg-neutral-600 text-neutral-800">
                <FaLinkedinIn />
              </a>
              <a className="p-2 inline-block rounded-full hover:text-white lg:text-xl text-lg bg-neutral-600 text-neutral-800">
                <PiWhatsappLogoBold />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
