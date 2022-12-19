import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import PillDetailContainer from './containers/Pill/PillDetailContainer';
import AccountPage from './pages/AccountPage';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';

const PrivateRouter = () => {
  const accessToken = localStorage.getItem('accessToken');

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
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
