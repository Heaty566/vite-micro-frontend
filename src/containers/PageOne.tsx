import * as React from 'react';
import ReactDOM from 'react-dom/client';

interface PageOneProps {}

const PageOne: React.FC<PageOneProps> = () => {
    return <div>page 1</div>;
};

ReactDOM.createRoot(document.getElementById('body') as HTMLElement).render(
    <React.StrictMode>
        <PageOne />
    </React.StrictMode>
);
