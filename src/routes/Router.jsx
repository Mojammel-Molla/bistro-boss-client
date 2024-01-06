import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/home/home/Home';
import OurMenu from '../pages/our-menu/OurMenu';
import Order from '../pages/orders/order/Order';
import LogIn from '../pages/log-in/LogIn';
import Register from '../pages/register/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'our-menu',
        element: <OurMenu />,
      },
      {
        path: 'order/:category',
        element: <Order />,
      },
      {
        path: 'login',
        element: <LogIn />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
