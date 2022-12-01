import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AccountPage from './pages/AccountPage';
import ProfilePage from './pages/ProfilePage';
import PillDetailContainer from './containers/Pill/PillDetailContainer';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
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
