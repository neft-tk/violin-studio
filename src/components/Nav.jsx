import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ handleLogout, isLoggedIn }) {

  const onLogoutClick = () => {
    handleLogout();
  }
  
  return (
    <nav class="px-2 sm:px-4 py-2.5 bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 border-gray-600">
      <div class="flex flex-wrap items-center w-full justify-between mx-none">
        <a href="/" class="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Buss Violin/Viola Studio
          </span>
        </a>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link to="/">
                <h1
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Home
                </h1>
              </Link>
            </li>
            {/* <li>
              <div>
                {isLoggedIn ? (
                  <button onClick={onLogoutClick}>
                    Logout
                  </button>
                ) : (
                  <>
                    <Link to="/login">
                      <h1
                        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                        aria-current="page"
                      >
                        Student Portal
                      </h1>
                    </Link>
                  </>
                )}
              </div>
            </li> */}
            <li>
              <Link to="/policies">
                <h1
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Policies
                </h1>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <h1
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Contact Me
                </h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
