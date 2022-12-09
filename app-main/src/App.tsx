import React, { useEffect } from 'react';
import { registerMicroApps, start } from 'qiankun';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import IconNavi from './components/IconNavi';
import { useAuth } from './context/auth';
import { UnauthApp } from './routes/unauthApp';
import { AuthApp } from './routes/authApp';

export const App = () => {

    const { user, setUser } = useAuth();
    console.log(user);

    useEffect(() => {
        const tokenStr = localStorage.getItem('qiankun');
        if (tokenStr) {
            const token = JSON.parse(tokenStr);
            setUser(token);
        }
    }, [])

    if (!user) {
        return <UnauthApp></UnauthApp>
    }

    return <AuthApp></AuthApp>
}

