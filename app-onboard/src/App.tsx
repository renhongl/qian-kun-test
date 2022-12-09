import React from 'react';
import { Link, Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import UserHome from './pages/Home'

function Home() {
    return (
        <Container>
            <Left>
                <Header>
                    Onboard
                </Header>
                <Link to="/onboard-app"><NaviItem>Home</NaviItem></Link>
                <Link to="/onboard-app/about"><NaviItem>About</NaviItem></Link>
            </Left>
            <Right>
                <Outlet></Outlet>
            </Right>
        </Container>
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

const Header = styled.div`
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-bottom: 1px solid gray;
`

const NaviItem = styled.div`
    height: 40px;
    line-height: 40px;
    text-align:  left;
    padding-left: 20px;
    &:hover{
        background-color: green;
        cursor: pointer;
    }
`

const Left = styled.div`
    width: 260px;
    height: 100%;
    border-right: 1px solid gray;
`

const Right = styled.div`
    width: calc(100% - 260px);
    height: 100%;
    padding: 20px;
`

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
`