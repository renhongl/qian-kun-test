import React, { useEffect } from 'react';
import { registerMicroApps, start } from 'qiankun';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../pages/Home';
import IconNavi from '../components/IconNavi';
import SubLayout from '../components/SubLayout';
import About from '../pages/About';
import Settings from '../pages/Settings';

export const AuthApp = () => {

    const location = useLocation();

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
        <IconNavi></IconNavi>
        {
            !['todo-app', 'onboard-app'].includes(location.pathname) ? <SubLayout>
                <Routes>
                    <Route path='' element={<Home></Home>}></Route>
                    <Route path='/about' element={<About></About>}></Route>
                    <Route path='/settings' element={<Settings></Settings>}></Route>
                </Routes>
            </SubLayout> : <Main id="container"></Main>
        }
    </div>
}

const Main = styled.div`
    width: calc(100vw - 320px);
    display: inline-block;
    height: 100vh;
`