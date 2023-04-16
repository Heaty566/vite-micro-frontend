import * as React from 'react';
import ReactDOM from 'react-dom/client';
interface PageTwoProps {}

export const PageTwo: React.FC<PageTwoProps> = () => {
    return <div>page 2</div>;
};

export default PageTwo;
ReactDOM.createRoot(document.getElementById('body') as HTMLElement).render(
    <React.StrictMode>
        <PageTwo />
    </React.StrictMode>
);
