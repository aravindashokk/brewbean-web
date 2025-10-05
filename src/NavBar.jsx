import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const NavBar = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const hideUserMenu = location.pathname === '/' || location.pathname === '/login';

  const handleLogout = () => {
    window.location.href = 'http://localhost:3000/logout';
  };

  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1 items-center gap-2">
        {!hideUserMenu && (
          <button
            aria-label="Open menu"
            className="btn btn-ghost btn-square"
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        )}
        <Link to="/profile" className="btn btn-ghost text-xl">Brewbean</Link>
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
              <li><Link to="/profile">Profile</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        </div>
      )}

      {/* Sliding sidebar */}
      {!hideUserMenu && (
        <>
          <aside
            className={`fixed left-0 top-0 z-50 h-full w-64 transform bg-base-100 shadow-xl transition-transform duration-200 ease-out ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            aria-hidden={!isMenuOpen}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-base-200">
              <span className="font-semibold">Menu</span>
            </div>
            <nav className="menu p-4">
              <ul className="menu">
                <li>
                  <Link to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/inventory">
                    Inventory
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
        </>
      )}
    </div>
  );
};

export default NavBar;
