import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-5/6 my-10 lg:text-left text-center">
        <h5 className="m-2 mb-4 font-bold text-primaryHeading text-xl ">
          Contact Me
        </h5>

        <input
          className="bg-bgPrimary w-full lg:w-2/3 shadow-md shadow-primaryShadow border-btnBorder px-2 py-1 m-2 border-2 rounded-lg"
          type="text"
          placeholder="Name"
        />

        <input
          className="bg-bgPrimary w-full lg:w-2/3 shadow-md shadow-primaryShadow border-btnBorder px-2 py-1 m-2 border-2 rounded-lg"
          type="text"
          placeholder="E-Mail"
        />

        <textarea
          className="bg-bgPrimary w-full lg:w-2/3 min-h-32 shadow-md shadow-primaryShadow border-btnBorder px-2 py-1 m-2 border-2 rounded-lg"
          placeholder="Message ..."
        ></textarea>
        <button className="bg-titleText shadow-md shadow-primaryShadow border-btnBorder px-4 py-1 m-2 border-2 rounded-lg font-semibold text-titleBar lg:text-base">
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
