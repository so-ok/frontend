import { useSelector } from 'react-redux';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import PillDetailContainer from './containers/Pill/PillDetailContainer';
import AccountPage from './pages/AccountPage';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';

const PrivateRouter = () => {
  const accessToken = useSelector(state => state.auth.accessToken);
  return accessToken === undefined || accessToken === null ? <Navigate to="/account" /> : <MainPage />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRouter />,
  },
  {
    path: '/account',
    element: <AccountPage />,
  },
  {
    path: `/detail/:id`,
    element: <PillDetailContainer />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
