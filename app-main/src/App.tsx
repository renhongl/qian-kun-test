import React, { useEffect } from 'react';
import { loadMicroApp, registerMicroApps, start } from 'qiankun';
import { BrowserRouter, Link } from 'react-router-dom';
import Navi from './components/Navi';
import styled from 'styled-components';

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
        {/* <Link to='/'>Home</Link> */}
        {/* <Link to='/todo-app'>Todo App</Link>
        <Link to='/onboard-app'>Onboard App</Link> */}
        <Navi></Navi>
        <Main id="container"></Main>
    </BrowserRouter>
}

const Main = styled.div`
    width: calc(100vw - 200px);
    display: inline-block;
    height: 100vh;
`