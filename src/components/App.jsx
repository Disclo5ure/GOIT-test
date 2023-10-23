import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/operations';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
