import React from 'react';
import { Link, Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import UserHome from './pages/Home'

function Home() {
    return (
        <div>
            Onboard Home
            <Link to="/onboard-app/about">About</Link>
            <Link to="/onboard-app">Example</Link>
            <Outlet></Outlet>
        </div>
    )
}

function About() {
    return (
        <div>
            Onboard About
        </div>
    )
}

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/onboard-app' element={<Home></Home>}>
                <Route path='' element={<UserHome></UserHome>}></Route>
                <Route path='about' element={<About></About>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
}
