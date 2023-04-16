import * as React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/index.css';
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
    return <div className="h-40 bg-red-500">Header</div>;
};

ReactDOM.createRoot(document.getElementById('header') as HTMLElement).render(
    <React.StrictMode>
        <Header />
    </React.StrictMode>
);
