import React from "react";
import Ellipse35 from "../../assets/images/Ellipse 35.png";
import Ellipse38 from "../../assets/images/Ellipse 38.png";
import Ellipse36 from "../../assets/images/Ellipse 36.png";
import Ellipse37 from "../../assets/images/Ellipse 37.png";

const Artists = () => {
  const data = [
    {
      id: 1,
      image: Ellipse38,
    },
    {
      id: 2,
      image: Ellipse35,
    },
    {
      id: 3,
      image: Ellipse36,
    },
    {
      id: 4,
      image: Ellipse37,
    },
    {
      id: 5,
      image: Ellipse38,
    },
    {
      id: 6,
      image: Ellipse35,
    },
  ];

  return (
    <div className="bg-black text-white mt-10 p-5">
      <div className="flex items-center md:ml-8">
        <h1 className="text-3xl font-bold font-mono">Artists</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:ml-20 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className=" w-40 rounded-full my-10 overflow-hidden"
            >
              <img className="w-full" src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Artists;
