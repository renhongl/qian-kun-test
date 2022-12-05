import React, { useEffect } from 'react';
import { loadMicroApp, registerMicroApps, start } from 'qiankun';
import { BrowserRouter, Link, useLocation } from 'react-router-dom';
import Navi from './components/Navi';
import styled from 'styled-components';
import Home from './pages/Home';
import IconNavi from './components/IconNavi';

export const App = () => {

    const location = useLocation();
    console.log(location.pathname)

    useEffect(() => {

        registerMicroApps([
            {
                name: 'todo',
                entry: '//localhost:3003',
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

    return <div style={{display: 'flex'}}>
        {/* <Link to='/'>Home</Link> */}
        {/* <Link to='/todo-app'>Todo App</Link>
        <Link to='/onboard-app'>Onboard App</Link> */}
        <IconNavi></IconNavi>
        {
            location.pathname === '/' ? <Home /> : <Main id="container"></Main>
        }
    </div>
}

const Main = styled.div`
    width: calc(100vw - 200px);
    display: inline-block;
    height: 100vh;
`