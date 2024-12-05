import React from 'react';
import Logo from '../assets/ViExport.jpg';
import Payment from '../assets/Payment-vi-exports.png';
import { PiMapPinThin } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


function Footer() {
    return (
        <div className='bg-yellow-500'>
            {/* Footer Main Section */}
            <div className='bg-gray-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-white px-6 py-10'>
                {/* Logo and Description */}
                <div className='space-y-4'>
                    <img src={Logo} className='w-32 md:w-48 lg:w-56 mx-auto lg:mx-0' alt="Logo" />
                    <p className='text-sm text-justify'>
                        Vi Exports India is a leading manufacturer and exporter of Basmati Rice, Non-Basmati Rice, Parboiled Rice in India. 
                        Vi Exports India is a USFDA-approved company having ISO 22000:2005, SO 22000:2005, HACCP, HALAL, KOSHER, and FSSAI certifications in rice production and supply.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className='space-y-4'>
                    <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>Navigation</h1>
                    <ul className='space-y-2 text-sm'>
                        <a href='/' className='hover:text-yellow-400'><li>Home</li></a>
                        <a href='/rice' className='hover:text-yellow-400'><li>Rice</li></a>
                        <a href='/wheat' className='hover:text-yellow-400'><li>Wheat</li></a>
                        <a href='/pulses' className='hover:text-yellow-400'><li>Pulses</li></a>
                        <a href='/aboutus' className='hover:text-yellow-400'><li>About Us</li></a>
                        <a href='/contactus' className='hover:text-yellow-400'><li>Contact Us</li></a>
                        <a href='/cart' className='hover:text-yellow-400'><li>Cart</li></a>
                    </ul>
                </div>

                {/* Brand Section */}
                <div className='space-y-4'>
                    <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>Brand</h1>
                    <ul className='space-y-2 text-sm'>
                        <li>Basmati Rice</li>
                        <li>Non Basmati Rice</li>
                        <li>Coffee</li>
                        <li>Oil's</li>
                        <li>Spices</li>
                    </ul>
                </div>

                {/* Private Labelling */}
                <div className='space-y-4'>
                    <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>Private Labelling</h1>
                    <ul className='space-y-2 text-sm'>
                        <li>Basmati Rice</li>
                        <li>Non Basmati Rice</li>
                        <li>Spices</li>
                        <li>Oil's</li>
                    </ul>
                </div>

                {/* Get in Touch */}
                <div className='space-y-4'>
                    <h1 className=' inline-block px-2 py-1 text-lg md:text-xl lg:text-2xl font-semibold'>Get in Touch</h1>
                    <div className='space-y-2 text-sm'>
                        <div className='flex items-start'>
                            <IoLocationOutline className='text-red-700 mr-2 text-5xl' />
                            <p>Vi Exports India Pvt Ltd.<br />B-5, 2nd Floor, Bhagwan Das Nagar, East Punjabi Bagh, Punjabi Bagh, Delhi – 110026, (India)</p>
                        </div>
                        <div className='flex items-center'>
                            <IoCallOutline className='text-red-700 mr-2' /> 
                            011 4278 7710
                        </div>
                        <div className='flex items-center'>
                            <FaWhatsapp className='text-red-700 mr-2' />
                            +91 730 337 3304
                        </div>
                        <div className='flex items-center'>
                            <MdOutlineMailOutline className='text-red-700 mr-2' />
                            care@viexports.com
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className='bg-gray-900 flex flex-col sm:flex-row justify-between items-center px-6 py-4 text-white text-sm'>
                <div className='mb-2 sm:mb-0'>© 2024 Vi Exports India | All Rights Reserved</div>
                <img src={Payment} className='w-auto h-6' alt="Payment Methods" />
            </div>
        </div>
    );
}

export default Footer;
