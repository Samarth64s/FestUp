import React, { useEffect, useState } from "react";
import { MdOutlineAccessTime } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import Rectangle67 from "../../assets/images/Rectangle 67.png";
const FeaturesEvents = () => {
  const targetDate = new Date("2024-03-01").getTime();

  const calculateRemainingTime = () => {
    const now = new Date().getTime();
    const timeDiff = targetDate - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(interval);
  });
  return (
    <div className="bg-slate-800 justify-center flex items-center mb-20 md:h-96">
      <div className=" text-white h-full m-5 md:flex md:flex-row-reverse ">
        <img
          className="w-80 h-60 mb-5 md:absolute md:mt-14 sm:right-4 lg:right-36 lg:w-1/4 lg:h-60 "
          src={Rectangle67}
          alt=""
        />
        <div>
          <h1 className=" text-2xl sm:text-3xl lg:text-4xl sm:absolute sm:left-14 lg:left-32 md:mt-10 mb-5 font-semibold ">
            Dinner party of Luis Family{" "}
          </h1>
          <div className="flex md:absolute md:mt-52 items-center gap-4 mb-4 ">
            <div className="border-2 rounded-full w-10 h-10 items-center flex justify-center">
              <GrLocation size={24} />
            </div>
            <p>West Harleybarought, UK</p>
          </div>
          <div className="flex items-center md:absolute md:mt-64 gap-4 ">
            <div className="border-2 rounded-full w-10 h-10 items-center flex justify-center">
              <MdOutlineAccessTime size={24} />
            </div>
            <p>12:30pm GMT</p>
          </div>
          <div className="flex sm:mr-96 md:mr-30 lg:mr-10  mt-20 justify-center flex-col items-center">
            <p>Start in...</p>
            <div className="flex text-2xl font-bold gap-4">
              <p>{remainingTime.days}</p>|<p>{remainingTime.hours}</p>|
              <p>{remainingTime.minutes}</p>|<p>{remainingTime.seconds}</p>
            </div>
            <div className="flex font-thin gap-8 border-b-2 p-2">
              <p>Days</p>
              <p>Hours</p>
              <p>min</p>
              <p>Sec</p>
            </div>
          </div>
          <button className="bg-blue-400 md:absolute lg:left-32 sm:left-14 sm:mt-32 md:mt-34 w-80 h-16 mt-5 rounded-lg font-bold">
            Book TIcket
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesEvents;
