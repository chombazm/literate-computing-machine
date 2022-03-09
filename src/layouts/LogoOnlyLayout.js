import React, { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import useAuth from '../hooks/useAuthentication';
// components
import Logo from '../components/Logo';

// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0)
  }
}));

// ----------------------------------------------------------------------

export default function LogoOnlyLayout() {
  const navigate = useNavigate();
  // const { isAuth } = useAuth();
  // console.log(isAuth, 'check authentication');
  // if (isAuth) {
  //   navigate('/dashboard/app');
  // }

  const { isAuth } = useAuth();
  useEffect(() => {
    if (isAuth) {
      navigate('/dashboard/app');
    }
  }, [isAuth, navigate]);
  return (
    <>
      <HeaderStyle>
        <Logo />
      </HeaderStyle>
      <Outlet />
    </>
  );
}
