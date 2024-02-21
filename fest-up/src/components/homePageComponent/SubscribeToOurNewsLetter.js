import React, { useState } from "react";

const SubscribeToOurNewsLetter = () => {
  const [submitEmail, setSubmitEmail] = useState("");
  const handleYesIMIN = () => {
    alert("Successfully Submited! " + submitEmail);
    setSubmitEmail("");
  };

  return (
    <div className="bg-slate-900 text-white flex flex-col p-5 sm:p-14 justify-center items-center gap-5 sm:gap-10">
      <p className="sm:text-xl text-sm sm:font-thin text-center">
        Want to hear about the best things to do in your city?
      </p>
      <h1 className="text-4xl font-bold text-center">
        SUBSCRIBE TO OUR NEWSLETTER!
      </h1>
      <p className="sm:text-xl text-sm sm:font-thin text-center">
        Join our mailing list and stay up to date with the latest events around
        you
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-5">
        <input
          value={submitEmail}
          onChange={(e) => setSubmitEmail(e.target.value)}
          className="w-full sm:w-72 h-10 bg-slate-900 p-2 sm:p-5 rounded-lg mb-2 sm:mb-0"
          placeholder="Enter Email"
        />
        <button
          onClick={handleYesIMIN}
          className="w-full sm:w-auto text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md"
        >
          YES, I'M IN
        </button>
      </div>
    </div>
  );
};

export default SubscribeToOurNewsLetter;
