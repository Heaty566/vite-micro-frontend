import * as React from 'react';
import ReactDOM from 'react-dom/client';

interface PageOneProps {}

export const PageOne: React.FC<PageOneProps> = () => {
    return <div>page 1</div>;
};

export default PageOne;
ReactDOM.createRoot(document.getElementById('body') as HTMLElement).render(
    <React.StrictMode>
        <PageOne />
    </React.StrictMode>
);
