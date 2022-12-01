import React from 'react';
import { Link, Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
declare const window: any;

function Home() {
    return (
        <div>
            Todo Home
            <Link to="/todo-app/about">About</Link>
            <Link to="/todo-app">Example</Link>
            <Outlet></Outlet>
        </div>
    )
}

function Example() {
    return (
        <div>
            Todo Example
        </div>
    )
}

function About() {
    return (
        <div>
            Todo About
        </div>
    )
}

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/todo-app' element={<Home></Home>}>
                <Route path='' element={<Example></Example>}></Route>
                <Route path='about' element={<About></About>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
}
