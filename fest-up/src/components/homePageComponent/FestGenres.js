import React from "react";

const FestGenres = () => {
const data =[
    {id:1, image:"small1",name:"Nightlife"},
    {id:1, image:"fireworks",name:"Festivals"},
    {id:1, image:"small5",name:"Music"},
    {id:1, image:"small4",name:"Workshop"},
    {id:1, image:"theater",name:"Comedy"},
    {id:1, image:"small2",name:"Theature & Arts"},
]

    return (
      <div className=" bg-black p-5 sm:ml-12 lg:h-36 text-white md:grid md:grid-cols-3 grid grid-cols-2 lg:flex justify-center items-center gap-4"> 
      {data.map((item,index)=>{
        return(
      <div key={index} className="bg-slate-800 gap-4 w-40 md:w-44 md:h-14 h-24 flex flex-col md:flex-row rounded-3xl justify-center items-center">
       <img src={process.env.PUBLIC_URL + `../../../images/${item.image}.png`} alt="" className="w-10 h-10"/>
       <p>{item.name}</p>
       </div>)
      })}
      </div>
  ) 
};

export default FestGenres;
