import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navLinks = (
    <>
      <NavLink>
        <li className="mr-3 uppercase">Home</li>
      </NavLink>
      <NavLink to="/our-menu">
        <li className="mr-3 uppercase">Our Menu</li>
      </NavLink>
      <NavLink to="order">
        <li className="mr-3 uppercase">Order</li>
      </NavLink>
      <NavLink>
        <li className="mr-3 uppercase">Contact Us</li>
      </NavLink>
      <NavLink>
        <li className="mr-3 uppercase">Dashboard</li>
      </NavLink>
    </>
  );
  const handleLogOut = () => {
    logOutUser();
  };
  return (
    <div>
      <div className="navbar fixed z-10 bg-black opacity-70 max-w-[1520px] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <p className="text font-bold text-xl">
            BISTRO BOSS <br />
            <span className="text-lg">Restaurant</span>
          </p>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogOut} className="btn">
              Log out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
