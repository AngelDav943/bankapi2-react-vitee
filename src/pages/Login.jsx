import React, { useState } from 'react'
import { Typography, Button, TextField, Box, Stack } from '@mui/material'
import axios from 'axios';

import './login.css'
import { useInfo } from '../context/useInfo';

export default function () {
    const { setUser, setLoaded } = useInfo();

    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(null);

    async function submitLogin(e) {
        e.preventDefault();
        setLoaded(false);

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

        setError(error);
        setLoaded(true);
        if (responseData && responseData.token) {
            setUser(responseData);
        }
    }

    return <Stack className='login' justifyContent="center" alignItems="center">
        <Stack className="main">
        <Stack direction="row" justifyContent="center" alignItems="center" className='logo'>
            <img src="placeholder_logo.png" alt="" />
        </Stack>
            <TextField
                error={error != null}
                type='text'
                label="Username"
                value={account.replace(/(?![0-9])./g, "") || ""}
                onChange={({ target: { value } }) => setAccount(value)}
            />
            <TextField
                error={error != null}
                label="Password"
                helperText={error}
                type='password'
                onChange={({ target: { value } }) => setPassword(value)}
            />
            <Button variant="contained" className='submit' onClick={submitLogin}>
                Log in
            </Button>
        </Stack>
    </Stack>
}