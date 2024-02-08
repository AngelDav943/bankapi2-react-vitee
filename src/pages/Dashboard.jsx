import { Typography, Button, TextField, Box, Stack } from '@mui/material'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ({ user }) {

    const [transfers, setTransfers] = useState({});

    const getMovements = async () => {
        let id = parseInt(user?.id)
        if (isNaN(id)) return

        const data = (await axios.get('https://apibank.ikoodi.site/api/movements/' + (id + 1)))
        if (data) setTransfers(data.data)
    }

    useEffect(() => { getMovements() }, [])

    console.log(user)

    return <Stack direction="row" justifyContent="space-around">
        <Box>
            <p>{user?.account}</p>
            <p>{user?.name}</p>
            <p>Balance: {user?.money}</p>
        </Box>
        <Box>
            <h3>Transaction history</h3>
        </Box>
    </Stack>
}