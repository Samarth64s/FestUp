import React from "react";

const Blog = () => {
  const data = [
    {
      id: 1,
      image: "dance",
      name: "Dance",
      para: "Put on Your shaps 'cause we're going dancing againg!",
    },
    {
      id: 2,
      image: "food",
      name: "Food",
      para: "Bake, brew and barbecue with interactive online food workshops",
    },
    {
      id: 3,
      image: "workshop",
      name: "workshop",
      para: 'Cakes, Cartoons, Crafts, Create something with digital workshop!',
    },
    {
      id: 4,
      image: "privateParties",
      name: "private Parties",
      para: "Creative Virtual Birthday Party ideas",
    },
  ];

  return (
    <div className="bg-black text-white mt-10 p-5">
      <div className="flex items-center md:ml-8">
        <h1 className="text-3xl font-bold font-mono">Blog</h1>
      </div>
      <div className="flex justify-center items-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="relative bg-slate-800 w-72 mx-10 rounded-3xl my-10 overflow-hidden"
            >
              <img
                className="h-72 w-full"
                src={
                  process.env.PUBLIC_URL + `../../../images/${item.image}.jpg`
                }
                alt=""
              />
              <div className="absolute inset-0 flex flex-col items-start p-4">
                <button className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded-md">
                  {item.name}
                </button>
                <p className="text-white text-center mt-40">{item.para}</p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Blog;
