import React, { useEffect } from 'react';
import { loadMicroApp, registerMicroApps, start } from 'qiankun';
import { BrowserRouter, Link } from 'react-router-dom';

export const App = () => {

    useEffect(() => {

        registerMicroApps([
            {
                name: 'todo',
                entry: '//localhost:3001',
                container: '#container',
                activeRule: '/todo-app',
            },
            {
                name: 'onboard',
                entry: '//localhost:3002',
                container: '#container',
                activeRule: '/onboard-app',
            }
        ]);
        start();
    }, [])

    return <BrowserRouter>
        <h1>Main App</h1>
        <Link to='/'>Home</Link>
        <Link to='/todo-app'>Todo App</Link>
        <Link to='/onboard-app'>Onboard App</Link>
        <div id="container"></div>
    </BrowserRouter>
}
