import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [dropDownMenu, setDropDownMenu] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <header className="sticky top-0 z-50 py-4 bg-white shadow-md max-padd-container flexBetween rounded-xl">
      {/* Logo / Home Link */}
      <Link to={"/"} className="bold-24">
        <div className="hidden md:flex">
          Home<span className="italic text-secondary">Rental</span>
        </div>
      </Link>

      {/* Search Bar */}
      <div className="relative p-2 px-4 bg-white rounded-full ring-1 ring-slate-900/5 w-44 sm:w-96 flexBetween gap-x-2">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full bg-white border-none outline-none"
        />
        <button className="absolute right-0 w-10 h-full text-white transition rounded-full cursor-pointer bg-secondary flexCenter hover:bg-secondary-dark">
          <FaSearch />
        </button>
      </div>

      {/* User Icon */}
      <div className="relative">
        <button
          className="flex items-center justify-center w-10 h-10 text-white transition rounded-full bg-secondary hover:bg-secondary-dark"
          onClick={toggleMenu}
        >
          <FaUser />
        </button>
        {/* Dropdown Menu (optional) */}
        {menuOpened && (
          <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-lg shadow-lg">
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </Link>
            <Link
              to="/logout"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
