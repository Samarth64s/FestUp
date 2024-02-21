import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram, FaPinterest, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 sm:p-8">

      <div className="flex items-center justify-center mb-4">
        <img src={process.env.PUBLIC_URL + "../../images/FestUp.png"} alt="Logo" className="h-12 w-auto" />
      </div>

      <nav className="flex flex-wrap justify-center mb-4">
        <Link to="#" className="mr-2 sm:mr-4 mb-2 sm:mb-0 underline block">Home</Link>
        <Link to="/Events" className="mr-2 sm:mr-4 mb-2 sm:mb-0 underline block">Events</Link>
        <Link to="#" className="mr-2 sm:mr-4 mb-2 sm:mb-0 underline block">Festival</Link>
        <Link to="#" className="mr-2 sm:mr-4 mb-2 sm:mb-0 underline block">Nightlife</Link>
        <Link to="#" className="mr-2 sm:mr-4 mb-2 sm:mb-0 underline block">About</Link>
        <Link to="#" className="mr-2 sm:mr-4 mb-2 sm:mb-0 underline block">Blog</Link>
        <Link to="#" className="mr-2 sm:mr-4 mb-2 sm:mb-0 underline block">Contactus</Link>
      </nav>

      <div className="flex justify-center space-x-2 sm:space-x-4 mb-4">
        <FaFacebook size={24} />
        <FaWhatsapp size={24} />
        <FaInstagram size={24} />
        <FaPinterest size={24} />
        <FaLinkedin size={24} />
      </div>

      <hr className="border-b border-gray-600 mb-4" />

      <div className="flex flex-col md:flex-row items-center md:justify-between mb-4">
        <div className="mb-2">
          <Link to="#" className="mr-2 sm:mr-4 mb-2 sm:mb-0">Privacy Policy |</Link>
          <Link to="#" className="mr-2 sm:mr-4 mb-2 sm:mb-0">Refund Policy |</Link>
          <Link to="#" className="mr-2 sm:mr-4 mb-2 sm:mb-0">Shipping Policy |</Link>
          <Link to="#" className="mr-2 sm:mr-4 mb-2 sm:mb-0">Terms of Service</Link>
        </div>
        <div className="text-center">
          <p>&copy; FestUp Designed & Developed by PSYBUG</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
