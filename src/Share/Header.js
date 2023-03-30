import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, Outlet, useLocation } from "react-router-dom";
import UseData from "../Hooks/UseData";
import logo from "../assets/images/logo/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { handleTheme, check, menuItem, NavLink } = UseData();
  const handle = (e) => {
    handleTheme(e);
  };
  const a = useLocation();

  return (
    <div className="z-50 ">
      <div className="container">
        {/* Header menu start  */}
        <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]  ">
          <div className=" flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent dark:bg-black ">
            <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5 ">
              <Link className="text-5xl font-semibold" to="/">
                {/* website logo  */}

                <img className="h-[26px] lg:h-[32px]" src={logo} alt="" />
              </Link>
              <div className="flex items-center">
                {/* dark mode icon */}

                {!check ? (
                  <span
                    onClick={() => handle("dark")}
                    className="bg-white w-[40px]  opacity-100 visible flex lg:opacity-0 lg:hidden  h-[40px]  rounded-full  justify-center items-center hover:bg-[#00a9bf] text-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer  ml-4"
                  >
                    <FiMoon className="  text-3xl" />
                  </span>
                ) : (
                  <span
                    onClick={() => handle("light")}
                    className="bg-[#4D4D4D] w-[40px] h-[40px] rounded-full  opacity-100 visible flex lg:opacity-0 lg:hidden justify-center items-center hover:bg-[#00a9bf] transition-all duration-300 ease-in-out cursor-pointer  ml-4"
                  >
                    <FiSun className="text-white text-3xl" />
                  </span>
                )}

                {/* mobile menu icon */}

                {!menuOpen ? (
                  <span
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:opacity-0 lg:invisible visible opacity-100  bg-[#00a9bf] w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3 "
                  >
                    <AiOutlineMenu />
                  </span>
                ) : (
                  <span
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:opacity-0 cursor-pointer lg:invisible visible opacity-100  bg-[#00a9bf] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 "
                  >
                    <AiOutlineClose />
                  </span>
                )}
              </div>
            </div>
          </div>
          <nav
            className={`${
              menuOpen ? "block  dark:bg-black   " : "hidden lg:block"
            }`}
          >
            {/* Menu items start  */}

            <ul
              className={`${
                menuOpen
                  ? "block lg:hidden  absolute left-0 rounded-b-[20px] top-20 z-[22222222222222] w-full bg-white dark:bg-[#1D1D1D] drop-shadow-lg py-4 "
                  : "flex my-12 "
              }`}
            >
              {menuItem.map((item) => (
                <li
                  onClick={() => setMenuOpen(false)}
                  key={item.id}
                  className=" "
                >
                  <NavLink
                    key={item.id}
                    activeClassName={`${
                      menuOpen
                        ? " text-[#00a9bf] dark:text-[#00a9bf] "
                        : " text-white  dark:text-white bg-gradient-to-r from-[#00a9bf] to-[#00a9bf] "
                    }`}
                    inactiveClassName={`${
                      menuOpen
                        ? " dark:hover:text-[#00a9bf]"
                        : "  dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#00a9bf] to-[#00a9bf] dark:text-[#A6A6A6] "
                    }  transition-all duration-300 ease-in-out `}
                    className={`${
                      a.pathname === "/home" && item.id === "01"
                        ? "text-white linked dark:text-white bg-gradient-to-r from-[#00a9bf] to-[#00a9bf] "
                        : " "
                    } ${
                      menuOpen
                        ? " pl-4 dark:text-white    hover:text-[#00a9bf] dark:hover:text-[#00a9bf]  "
                        : " rounded-md  cursor-pointer    font-poppins  bg-white text-gray-lite  "
                    }  font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center  transition-all duration-300 ease-in-out `}
                    to={item?.link}
                  >
                    <span className="mr-2 text-xl">{item?.icon}</span>{" "}
                    {item?.name}
                  </NavLink>
                </li>
              ))}

              {/* dark mode */}

              {!check ? (
                <span
                  onClick={() => handle("dark")}
                  className="bg-white w-[40px] hover:text-white hidden  h-[40px] rounded-full lg:flex justify-center items-center text-black hover:bg-[#00a9bf] transition-all duration-300 ease-in-out cursor-pointer ml-2 "
                >
                  <FiMoon className="  text-3xl" />
                </span>
              ) : (
                <span
                  onClick={() => handle("light")}
                  className="bg-[#4D4D4D] w-[40px] h-[40px] hidden  rounded-full lg:flex justify-center items-center   hover:bg-[#00a9bf] transition-all duration-300 ease-in-out cursor-pointer ml-2"
                >
                  <FiSun className="text-white text-3xl" />
                </span>
              )}
            </ul>

            {/* Menu items end  */}
          </nav>
        </header>

        {/* Header menu End  */}

        {<Outlet />}
      </div>
    </div>
  );
};

export default Header;
