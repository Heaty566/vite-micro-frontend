import * as React from 'react';
import ReactDOM from 'react-dom/client';
interface PageTwoProps {}

const PageTwo: React.FC<PageTwoProps> = () => {
    return <div>page 2</div>;
};

ReactDOM.createRoot(document.getElementById('body') as HTMLElement).render(
    <React.StrictMode>
        <PageTwo />
    </React.StrictMode>
);
