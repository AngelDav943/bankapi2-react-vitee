import { Link } from 'react-router-dom'
import './header.css'
import { Typography, Button, TextField, Box, Stack } from '@mui/material'

export default function() {
    return <Stack className='header' direction="row" justifyContent="space-around" >
        <img src="minimal_logo.png" alt="logo" />
        <Stack direction="row" alignItems="center">
            <Link to="/home">Home</Link>
            <Link to="/transactions">Transactions</Link>
        </Stack>
    </Stack>
}