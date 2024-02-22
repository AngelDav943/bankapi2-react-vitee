import { Link } from 'react-router-dom'
import './header.css'
import {
    Typography,
    Button,
    Toolbar,
    Box,
    Stack,
    AppBar,
    IconButton,
    Container,
    Tooltip,
    Avatar,
    Icon,
    Menu,
    MenuItem
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';

import { useState } from 'react'

const pages = ['Home', 'Transactions'];
const settings = ['Log out'];

export default function () {
    const [avatarMenu, setAvatarMenu] = useState(null);

    const handleOpenUserMenu = (e) => {
        setAvatarMenu(e.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAvatarMenu(null);
    };

    const handleNavButton = (location) => {

    }

    return <AppBar position='static'>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Icon fontSize='large' sx={{ display: { xs: 'none', md: 'flex' }, mr: 2, width: 'auto' }}>
                    <img src="/placeholder_logo.png" alt="logo" />
                </Icon>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="John doe" src="/minimal_logo.jpg" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={avatarMenu}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(avatarMenu)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">Log out</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
}