import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from './pages/Authentication/LoginPage/index';
import ErrorPage from './pages/ErrorPage/index';
import MoviesListingPage from './pages/MoviesListingPage';
import AddMovie from './pages/AddMoviePage';

export const router = createBrowserRouter([
    {
        path: '*',
        element: <ErrorPage />,
    },
    {
        path: '/',
        element: <Navigate to="/login" />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/movies_listing',
        element: <MoviesListingPage />,
    },
    {
        path: '/movie',
        element: <AddMovie />,
    }
]);
