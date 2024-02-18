import { Link } from 'react-router-dom'
import './header.css'
import { Typography, Button, TextField, Box, Stack } from '@mui/material'
import { useState } from 'react'

export default function () {
    const [showNavigation, setNavigation] = useState(false);

    return <Box className={`header ${showNavigation ? 'open' : ''}`}>
        <Stack className='main' direction="row" justifyContent="space-between">

            <img src="minimal_logo.png" alt="logo" onClick={() => setNavigation(!showNavigation)} />
            {/* <Stack direction="row" alignItems="center" className='nav'>
                <Link to="/home">Home</Link>
                <Link to="/transactions">Transactions</Link>
            </Stack> */}
        </Stack>
    </Box>
}