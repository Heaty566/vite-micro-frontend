import * as React from 'react';
import ReactDOM from 'react-dom/client';
interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
    return <div className="h-40 bg-blue-500">Footer</div>;
};

ReactDOM.createRoot(document.getElementById('footer') as HTMLElement).render(
    <React.StrictMode>
        <Footer />
    </React.StrictMode>
);
