
import { createRoot } from 'react-dom/client';
import { App } from './App';
import React from 'react';
import './style.css'
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './context';

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <AppProvider>
            <App />
        </AppProvider>
    </BrowserRouter>
);

