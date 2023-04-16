import * as React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from '../core/routes';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

interface BodyProps {}

export const Body: React.FC<BodyProps> = () => {
    return (
        <div className="flex-1 bg-yellow-500">
            <Route path="/" Component={PageOne} />
            <Route path="/about" Component={PageTwo} />
        </div>
    );
};
