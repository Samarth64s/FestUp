import React from "react";
import { TfiMedall } from "react-icons/tfi";
import { FaCalendarDays } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { MdCurrencyRupee } from "react-icons/md";
const RecommendedEvents = () => {

  const data = [
    {id:1,image:"Rectangle 12",name:"Glasgow International Hosted",date:"7th Mar, 2024 | 6:30 AM",location:"ULAB Campus, Bangladesh"},
    {id:2,image:"Rectangle 9",name:"Glasgow International Hosted",date:"7th Mar, 2024 | 6:30 AM",location:"ULAB Campus, Bangladesh"},
    {id:3,image:"Rectangle 10",name:"Glasgow International Hosted",date:"7th Mar, 2024 | 6:30 AM",location:"ULAB Campus, Bangladesh"},
    {id:4,image:"Rectangle 11",name:"Glasgow International Hosted",date:"7th Mar, 2024 | 6:30 AM",location:"ULAB Campus, Bangladesh"},
  ]

  return (
  <div className="bg-black text-white p-5" >
  <div className="flex items-center md:ml-8">
  <TfiMedall  size={32}/>
  <h1 className="text-3xl font-bold font-mono">Recommended Events</h1>
  </div>
  <div className="flex justify-center items-center w-full">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {data.map((item,index)=>{
    return(
        <div key={index} className="bg-slate-900 w-72 mx-10 rounded-3xl my-10 overflow-x-auto">
     <img className="overflow-hidden" src={process.env.PUBLIC_URL + `../../../images/${item.image}.png`} alt="" />
    <div className="ml-3">
        <h1>07 {item.name}</h1>
        <div className="flex gap-4 mt-5">
        <FaCalendarDays size={20}/>
          <p>{item.date}</p>
        </div>
        <div className="flex gap-4">
        <GrLocation  size={20}/>
          <p>{item.location}</p>
        </div>
    </div>
    <button className="flex bg-slate-700 p-5 rounded-xl m-2 gap-8">
        <p className="flex-1 flex items-center">
        <MdCurrencyRupee size={20}/>
         550 On words</p>
        <p>| BUY NOW</p>
    </button>
    </div>
    )
  })}

  </div>
  </div>
  </div>
  );
};

export default RecommendedEvents;
