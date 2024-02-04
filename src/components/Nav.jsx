import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";


const Nav = () => {
  const [Navbar, setNavbar] = useState(false);

  const handleNav = () => {
    setNavbar(!Navbar)
  }
  return (
    <header className='padding-x py-8 absolute z-20 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li className="hover:scale-110 duration-300 ease-in-out" key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-slate-900 transition duration-300 ease-in-out'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a className="hover:scale-110 duration-300 ease-in-out " href='/'>Sign in</a>
          <span>/</span>
          <a className="hover:scale-110 duration-300 ease-in-out " href='/'>Explore now</a>
        </div>

        {/* HAMBURGER MENU FOR MOBILE DEVICES*/}

        <div onClick={handleNav} className="block md:hidden relative" >
            {Navbar ? <IoMdClose size={20} /> : <RxHamburgerMenu size={20}/>}
        </div>
        <div className={Navbar ? "fixed  left-0 top-0 py-6 border-r-gray-300 h-full w-[60%] bg-black ease-in-out duration-300 md:hidden " : "fixed left-[100%] "}>
            <ul className="uppercase p-4 relative " >
              {navLinks.map((item) => (
              <li className=" p-4 border-b border-gray-600 hover:scale-110 duration-300 ease-in-out hover:bg-slate-300 hover:text-slate-900 " key={item.label}>
                <a
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-[#FFFF] font-bold transition duration-300 ease-in-out'
                >
                  {item.label}
                </a>
              </li>
            ))}
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;