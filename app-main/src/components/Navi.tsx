import { NaviItem } from 'models/navi';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const navi: NaviItem[] = [
    {
        id: '0',
        text: 'Home',
        icon: '',
        link: '/'
    },
    {
        id: '1',
        text: 'TODO',
        icon: '',
        link: '/todo-app'
    },
    {
        id: '2',
        text: 'Onboard',
        icon: '',
        link: '/onboard-app'
    }
];

export default function Navi() {

    return (
        <NaviContainer>
            <Logo>LOGO</Logo>
            {
                navi.map((item, index) => {
                    return (
                        <Link to={item.link} key={item.id}><NaviItem className={index === 0 ? 'active' : ''} >{item.text}</NaviItem></Link>
                    )
                })
            }
        </NaviContainer>
    )
}

const Logo = styled.div`
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-bottom: 1px solid #fff;
`


const NaviContainer = styled.div`
    background: gray;
    display: inline-block;
    height: 100vh;
    width: 200px;
`

const NaviItem = styled.div`
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    &:hover{
        cursor: pointer;
        background: red;
    }
    &.active{
        background: #af0505;
    }
`