import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const [isDropdownOpen,setIsDropdownOpen] = useState(false);
    const handleDropdownToggel = () =>{
        setIsDropdownOpen(!isDropdownOpen);
    }
    const closeDropdown = ()=>{
        setIsDropdownOpen(false);
    }

  return (
    <div>
    <div className="bg-black h-20 w-full text-white flex items-center justify-between">
     <div className="sm:flex sm:items-center flex ml-4 w-full">
     
     <div className="sm:hidden mt-2.5 flex-1" onClick={handleDropdownToggel}>
        <GiHamburgerMenu  size={28}/>        
        </div>

     <img
        className="sm:ml-5 flex-1 sm:flex-none"
        src={process.env.PUBLIC_URL + "../../images/FestUp.png"}
        alt="Logo"
      />


      <nav className="flex-1">
        <ul className="sm:flex gap-8 hidden ml-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/EventsPage">Events</Link>
          </li>
          <li>
            <Link to="/ListYourEventPage">List Your Event</Link>
          </li>
        </ul>
      </nav>
      
      <div className=" hidden sm:flex w-40 gap-2 rounded-full bg-slate-700 opacity-90 h-11 items-center justify-center mr-2">
        <SlLocationPin  size={22}/>
        <select className="text-white cursor-pointer bg-slate-700 w-24 border-slate-700">
            <option value="Indore">Indore</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Jabalpur">Jabalpur</option>
            <option value="Ujjain">Ujjain</option>
        </select>
      </div>

     <img className="mr-4  cursor-pointer space-x-44" src={process.env.PUBLIC_URL + "../../images/Ellipse 1.png"} alt=""/>
      </div>
      
    </div>
    {isDropdownOpen && 
    <div className="bg-black w-56 h-40 absolute text-white z-10">
    <nav>
        <ul className="ml-4" >
          <li>
            <Link to="/" onClick={closeDropdown}>Home</Link>
          </li>
          <li>
            <Link to="/EventsPage" onClick={closeDropdown}>Events</Link>
          </li>
          <li>
            <Link to="/ListYourEventPage" onClick={closeDropdown}>List Your Event</Link>
          </li>
        </ul>
      </nav>
   </div>
    }
   </div>

  );
};

export default Header;
