import React from 'react';
import Responsive from '../components/common/Responsive';
import Account from '../components/Accounts/Account';

const AccountPage = () => {
  return (<Responsive className='flex flex-col w-11/12 mx-auto h-screen'>
    <Account />
  </Responsive>);
};

export default AccountPage;
