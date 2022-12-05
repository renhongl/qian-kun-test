import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { Link } from 'react-router-dom';

export default function SubMenu() {
    return (
        <Paper sx={{ width: '260px', maxWidth: 'calc(100vw - 200px)' }}>
            <ListItemText>Management Applications</ListItemText>
            <MenuList>
                <Link to='/'>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentCut fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>User</ListItemText>
                    </MenuItem>
                </Link>
                <Link to='/about'>
                <MenuItem>
                    <ListItemIcon>
                        <ContentCopy fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Account</ListItemText>
                </MenuItem>
                </Link>
                <Link to='/permission'>
                <MenuItem>
                    <ListItemIcon>
                        <ContentPaste fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Permission</ListItemText>
                </MenuItem>
                </Link>
                <Divider />
                <Link to='/settings'>
                <MenuItem>
                    <ListItemIcon>
                        <Cloud fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Settings</ListItemText>
                </MenuItem>
                </Link>
            </MenuList>
        </Paper>
    );
}
