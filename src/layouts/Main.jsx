import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import Navbar from '../pages/shared/navbar/Navbar';

const Main = () => {
  const location = useLocation();
  const footerLess =
    location.pathname.includes('login') ||
    location.pathname.includes('register');
  return (
    <div>
      {footerLess || <Navbar></Navbar>}
      <Outlet></Outlet>
      {footerLess || <Footer></Footer>}
    </div>
  );
};

export default Main;
