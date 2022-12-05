
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

export default function IconMenu() {
    const location = useLocation();
    return (
        <Paper sx={{ width: 60, maxWidth: '100%' }}>
            <Logo>LOGO</Logo>
            <MenuList>
                <NewMenuItem selected={['/', '/about', '/settings'].includes(location.pathname)}>
                    <Link to='/'>
                        <NewListItemIcon>
                            <HomeIcon fontSize="small" />
                        </NewListItemIcon>
                    </Link>
                </NewMenuItem>
                <NewMenuItem selected={location.pathname.startsWith('/todo-app')}>
                    <Link to='/todo-app'>
                        <NewListItemIcon>
                            <PlaylistAddCheckIcon fontSize="small" />
                        </NewListItemIcon>
                    </Link>
                </NewMenuItem>
                <NewMenuItem selected={location.pathname.startsWith('/onboard-app')}>
                    <Link to='/onboard-app'>
                        <NewListItemIcon>
                            <AirplanemodeActiveIcon fontSize="small" />
                        </NewListItemIcon>
                    </Link>
                </NewMenuItem>
            </MenuList>
        </Paper>
    );
}

const NewListItemIcon = styled(ListItemIcon)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px !important;
    height: 60px !important;
`

const NewMenuItem = styled(MenuItem)`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 !important;
    margin: 0 !important;
`

const Logo = styled.div`
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-bottom: 1px solid #fff;
`