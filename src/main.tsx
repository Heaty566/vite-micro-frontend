import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Header } from './containers/Header';
import { Footer } from './containers/Footer';
import { Body } from './containers/Body';

ReactDOM.createRoot(document.getElementById('header') as HTMLElement).render(
    <React.StrictMode>
        <Header />
    </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById('footer') as HTMLElement).render(
    <React.StrictMode>
        <Footer />
    </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById('body') as HTMLElement).render(
    <React.StrictMode>
        <Body />
    </React.StrictMode>
);
