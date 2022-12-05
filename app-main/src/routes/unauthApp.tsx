import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Redirect from '../components/Redirect';
import Login from '../pages/Login';

export const UnauthApp = () => {

    return <Routes>
        <Route path='' element={<Login />}></Route>
        <Route path='*' element={<Redirect to='/'/>}></Route>
    </Routes>
}

