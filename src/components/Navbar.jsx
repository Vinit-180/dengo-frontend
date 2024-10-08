"use client";
import React, { useState } from "react";
import question from "../../public/questionmark.svg";
import Image from "next/image";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 px-10">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
         <a
          href="https://flowbite.com/"
          className="flex items-center gap-1 rtl:space-x-reverse">
            <h1 className="self-center text-4xl font-semibold text-orange-500" style={{ fontFamily: "Boston Angel" }}>
  dengo
</h1>
          <h5 className="pt-2">for residential</h5>
        </a>
        <button
          onClick={toggleNavbar}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isNavbarOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Navbar Links */}
        <div className={`${isNavbarOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="w-100">
            <button className="bg-orange-100 text-black px-4 py-2 rounded-full flex gap-4 justify-center items-center w-100">
              <img src="https://img.icons8.com/?size=100&id=FkQHNSmqWQWH&format=png&color=000000" alt="Active" className="h-4 w-4" />
              Active
            </button>
            </li>
            <li>
            <button className="bg-orange-100 text-black px-4 py-2 rounded-full flex gap-4 justify-center items-center">
              <Image src={question} alt="Help" className="h-4 w-4" />
              Help
            </button>
            </li>
            <li>
            <button
            type="button"
            className="flex text-sm px-3 py-3 bg-black rounded-full text-white sm:order-2 order-1 focus:ring-4"
            id="user-menu-button"
          >
            <span className="sr-only">Open user menu</span>
            CV
          </button>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;

































// "use client";
// import React, { useState } from "react";
// import question from "../../public/questionmark.svg";
// import Image from "next/image";
// const Navbar = () => {
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
//   const [isNavbarOpen, setIsNavbarOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsNavbarOpen(!isNavbarOpen);
//   };

//   return (
//     <nav className="bg-white border-gray-200 ">
//       <div className=" flex flex-wrap  mx-auto p-4 justify-between">
        // <a
        //   href="https://flowbite.com/"
        //   className="flex items-center space-x-3 rtl:space-x-reverse"
        // >
        //   <span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-500">
        //     dengo
        //   </span>
        //   <h5>for resindential</h5>
        // </a>
//         <div className="flex items-center md:order-2 space-x-3">
//         <button 
//     data-collapse-toggle="navbar-default" 
//     type="button" 
//     className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
//     aria-controls="navbar-default" 
//     aria-expanded={isNavbarOpen} // Update aria-expanded based on state
//     onClick={toggleNavbar} // Add onClick handler
//   >
//     <span className="sr-only">Open main menu</span>
//     <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
//     </svg>
//   </button>
//           <div className={` flex-col md:flex-row items-start md:order-2 space-y-2 rtl:space-x-reverse ${isNavbarOpen ? 'block' : 'hidden'}`} 
//     id="navbar-default">
//     <button className='bg-orange-100 text-black px-4 py-2 rounded-full flex gap-4 justify-center items-center'>
//       <img src="https://img.icons8.com/?size=100&id=FkQHNSmqWQWH&format=png&color=000000" alt="" className='h-4 w-4' />
//       Active
//     </button>

//     <button className='bg-orange-100 text-black px-4 py-2 rounded-full flex gap-4 justify-center items-center'>
//       <Image src={question} alt="" className='h-4 w-4' />
//       Help
//     </button>
//   </div>


//           {/* <button
//             type="button"
//             className="flex text-sm px-3 py-3 bg-black rounded-full md:me-0 focus:ring-4 text-white sm:order-2 order-1"
//             id="user-menu-button"
//           >
//             <span className="sr-only">Open user menu</span>
//             CV
//           </button> */}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
