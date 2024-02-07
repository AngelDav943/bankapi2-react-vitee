import React, { useEffect, useState } from 'react'
import { Typography, Button, TextField, Box, Stack } from '@mui/material'
import axios from 'axios';

import './login.css'

export default function ({ setUser }) {

    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(null);

    async function submitLogin(e) {
        e.preventDefault();

        var responseData = null
        var error = null
        try {
            const json = (await axios.post('https://apibank.ikoodi.site/api/login', {
                "account": account,
                "password": password
            }))

            if (json["data"]) responseData = json.data
        } catch (err) {
            error = "Invalid account/password"
        }

        setError(error)
        if (responseData && responseData["user"] != null) setUser(responseData.user)
    }

    return <>
        <Stack className='login' justifyContent="center">
            <Typography variant='h5'>Log in</Typography>
            <TextField fullWidth error={error != null} id="username" label="Username" variant="outlined" value={account} onChange={({ target: { value } }) => setAccount(value)} />
            <TextField fullWidth error={error != null} helperText={error} id="password" type='password' label="Password" variant="outlined" value={password} onChange={({ target: { value } }) => setPassword(value)} />
            <Button type='submit' variant="contained" onClick={submitLogin}>Log in</Button>
        </Stack>
    </>
}