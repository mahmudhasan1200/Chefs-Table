import { CiSearch } from "react-icons/ci";
import frame4 from "../assets/Frame (4).svg";
const Navbar = () => {
  return (
    <div className="mb-16">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#150b2bb3]"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <h1 className="text-[#150B2B] text-3xl font-bold">Recipe Calories</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#150b2bb3]">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#150b2b0d] w-full pl-10 pr-4 py-2 placeholder:text-[#150b2bb3] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <CiSearch className="absolute text-[#150b2bb3] left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          </div>
          <div className="bg-[#0BE58A] rounded-full ml-4">
            <img className="p-2" src={frame4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
