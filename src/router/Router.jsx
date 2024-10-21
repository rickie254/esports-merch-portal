import { createBrowserRouter } from "react-router-dom";
import Landing from '../pages/Landing';
import React from 'react';
import LoginRegister from '../pages/auth/LoginRegister';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/loginRegister",
        element: <LoginRegister />,
    },
]);
