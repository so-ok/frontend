import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../modules/user';
import Profile from '../components/Accounts/Profile';
import Loading from '../components/common/Loading';

const ProfilePageContainer = () => {
  const dispatch = useDispatch();
  const { userInfo, loading } = useSelector(
    ({ user, loading }) => ({
      userInfo: user.user,
      loading: loading['user/GET_USER'],
    }),
  );

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return !loading ? <Profile image={userInfo?.image} email={userInfo?.email} username={userInfo?.username} /> :
    <Loading />;
};

export default ProfilePageContainer;