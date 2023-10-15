import { createBrowserRouter } from "react-router-dom";

import { Home, Bank, Bitcoin, Login,  Page404, Send, Spend, Stock } from "../pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/spend',
        element: <Spend />,
    },
    {
        path: '/bank',
        element: <Bank />,
    },
    {
        path: '/send',
        element: <Send />,
    },
    {
        path: '/bitcoin',
        element: <Bitcoin />,
    },
    {
        path: '/stock',
        element: <Stock />,
    },
    {
        path: '*',
        element: <Page404 />,
    },
], {basename: '/cashapp'});


