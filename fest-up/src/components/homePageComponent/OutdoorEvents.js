import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { MdCurrencyRupee } from "react-icons/md";
import Rectangle12 from "../../assets/images/Rectangle 12.png";
import Rectangle9 from "../../assets/images/Rectangle 9.png";
import Rectangle10 from "../../assets/images/Rectangle 10.png";
import Rectangle11 from "../../assets/images/Rectangle 11.png";

const OutdoorEvents = () => {
  const data = [
    {
      id: 1,
      image: Rectangle12,
      name: "Glasgow International Hosted",
      date: "7th Mar, 2024 | 6:30 AM",
      location: "ULAB Campus, Bangladesh",
    },
    {
      id: 2,
      image: Rectangle9,
      name: "Glasgow International Hosted",
      date: "7th Mar, 2024 | 6:30 AM",
      location: "ULAB Campus, Bangladesh",
    },
    {
      id: 3,
      image: Rectangle10,
      name: "Glasgow International Hosted",
      date: "7th Mar, 2024 | 6:30 AM",
      location: "ULAB Campus, Bangladesh",
    },
    {
      id: 4,
      image: Rectangle11,
      name: "Glasgow International Hosted",
      date: "7th Mar, 2024 | 6:30 AM",
      location: "ULAB Campus, Bangladesh",
    },
  ];

  return (
    <div className="bg-slate-900 text-white mt-10 p-5">
      <div className="flex items-center md:ml-8">
        <IoFastFoodOutline size={32} />
        <h1 className="text-3xl ml-3 font-bold font-mono">Outdoor Events</h1>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-slate-800 w-72 mx-10 rounded-3xl my-10 overflow-x-auto"
              >
                <img className="overflow-hidden" src={item.image} alt="" />
                <div className="ml-3">
                  <h1>07 {item.name}</h1>
                  <div className="flex gap-4 mt-5">
                    <FaCalendarDays size={20} />
                    <p>{item.date}</p>
                  </div>
                  <div className="flex gap-4">
                    <GrLocation size={20} />
                    <p>{item.location}</p>
                  </div>
                </div>
                <button className="flex bg-slate-700 p-5 rounded-xl m-2 gap-8">
                  <p className="flex-1 flex items-center">
                    <MdCurrencyRupee size={20} />
                    550 On words
                  </p>
                  <p>| BUY NOW</p>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OutdoorEvents;
