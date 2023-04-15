import * as React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const PageOne = React.lazy(() => import('../../containers/PageOne'));
const PageTwo = React.lazy(() => import('../../containers/PageTwo'));

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <PageOne />,
    },
    {
        path: '/page2',
        element: <PageTwo />,
    },
]);
