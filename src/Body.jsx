import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const Body = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const location = useLocation();
  const hideUserMenu = location.pathname === '/' || location.pathname === '/login';

  return (
    <div className={!hideUserMenu && isMenuOpen ? 'ml-64 transition-[margin] duration-200 ease-out min-h-screen flex flex-col' : 'ml-0 transition-[margin] duration-200 ease-out min-h-screen flex flex-col'}>
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
