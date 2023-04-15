import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from '../core/routes';

interface BodyProps {}

export const Body: React.FC<BodyProps> = () => {
    return (
        <div className="flex-1 bg-yellow-500">
            <RouterProvider router={routes} />
        </div>
    );
};
