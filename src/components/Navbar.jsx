import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

 const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="flex items-center justify-between py-5 font-medium">
        <Link to='/'><img src={assets.logo} alt="Logo" /></Link> 
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-6">
          <img src={assets.search} className="w-5 cursor-pointer" />
          <div className="group relative">
            <img src={assets.profile} className="w-5 cursor-pointer" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
             <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
             </div>
            </div>
          </div>
          <Link to="/cart" className="relative">
          <img src={assets.back}/>
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">10</p>
          </Link>
          <img onClick={()=>setOpen(true)} src={assets.Menu} className="w-5 cursor-pointer sm:hidden"/>
        </div>
        {/*sidebar menu*/}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${open ? 'w-full' :'w-0'}`}>
         <div className="flex flex-col text-rgay-600">
          <div onClick={()=>setOpen(false)} className="flex items-center gap-4 p-3 cursor-pointer">
           <img src="https://cdn3.iconfinder.com/data/icons/multimedia-24px/24/chevron_left_previous_arrow-512.png" className="h-4 w-[30px] h-[30px]"/>
           <p>black</p>
          </div>
          <NavLink className="py-2 pl-6 border text-center pt-10" onClick={()=> setOpen(false)} to="/">HOME</NavLink>
          <NavLink className="py-2 pl-6 border text-center pt-10" onClick={()=> setOpen(false)} to="/collection">COLLECTION</NavLink>
          <NavLink className="py-2 pl-6 border text-center pt-10" onClick={()=> setOpen(false)} to="/about">ABOUT</NavLink>
          <NavLink className="py-2 pl-6 border text-center pt-10" onClick={()=> setOpen(false)} to="/contact">CONTACT</NavLink>
         </div>
        </div>
      </div>
    </React.Fragment>
  );
}
