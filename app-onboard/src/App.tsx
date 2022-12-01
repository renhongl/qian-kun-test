import React from 'react';
import { Link, Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
declare const window: any;

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

function Example() {
    return (
        <div>
            Onboard Example
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
                <Route path='' element={<Example></Example>}></Route>
                <Route path='about' element={<About></About>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
}
