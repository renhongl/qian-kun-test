import Todo from './pages/Todo';
import React from 'react';
import { Link, Outlet, BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import 'antd/dist/reset.css';
import { Button, Menu, MenuProps, Space } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('TODO', '/todo-app'),
    getItem('About', '/todo-app/about'),
]

function Home() {

    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        const path = e.key;
        navigate(path);
    };


    return (
        <Container>
            <Navi>
                <NaviHeader>
                    Todo
                </NaviHeader>
                <Menu
                    onClick={onClick}
                    style={{ width: 256, height: 'calc(100vh - 60px)' }}
                    defaultSelectedKeys={['/todo-app']}
                    mode="inline"
                    items={items}
                />
            </Navi>
            <Main>
                <Outlet></Outlet>
            </Main>
        </Container>
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
                <Route path='' element={<Todo></Todo>}></Route>
                <Route path='about' element={<About></About>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
}

const NaviHeader = styled.div`
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-bottom: 1px solid gray;
`

const Main = styled.div`
    height: 100vh;
    padding: 20px;
`

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`


const Navi = styled.div`
    height: 100vh;
`