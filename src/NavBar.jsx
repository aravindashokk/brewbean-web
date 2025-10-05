import React from 'react';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const hideUserMenu = location.pathname === '/' || location.pathname === '/login';

  const handleLogout = () => {
    window.location.href = 'http://localhost:3000/logout';
  };

  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Brewbean</a>
      </div>
      {!hideUserMenu && (
        <div className="flex gap-2">
          <div className="dropdown dropdown-end mx-5">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-5 w-52 p-2 shadow"
            >
              <li><a href="#">Profile</a></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
