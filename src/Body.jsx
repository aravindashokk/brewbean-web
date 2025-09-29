import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const Body = () => (
  <div>
    <NavBar />
    <Outlet />
    <Footer />
  </div>
);

export default Body;
