import React from 'react'
import navLogo from '../../public/LOOKaSHOW FavIcon.png'
import { RiSearchLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { MdMovie } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <nav className='w-screen flex justify-between items-center px-12 fixed top-0 z-50'>
                <img src={navLogo} className='w-20'/>
                <ul className='flex gap-12 py-1 px-6 rounded-xl bg-[#fd121230]'>
                    <li className='flex flex-col items-center cursor-pointer'><FaHome />Home</li>
                    <li className='flex flex-col items-center cursor-pointer'><BiCameraMovie />Movie</li>
                    <li className='flex flex-col items-center cursor-pointer'><MdMovie />Series</li>
                    <li className='flex flex-col items-center cursor-pointer'><FaBookmark />Watch Later</li>
                </ul>
                <div className='flex items-center gap-2'>
                    <input type="search" name="search" placeholder='Search' className='hidden px-4 py-1 border-2 border-solid border-black rounded-lg bg-transparent text-white outline-none'/>
                    <RiSearchLine className='cursor-pointer text-2xl text-yellow-300'/>
                </div>
            </nav>
        </>
    )
}

export default Navbar