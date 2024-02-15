import { Typography, Button, TextField, Box, Stack, Skeleton } from '@mui/material'
import { useState, useEffect } from 'react';
import axios from 'axios';

import './dashboard.css'
import Loading from '../components/Loading';

export default function ({ user, setUser }) {

    const [account, setAccount] = useState("");
    const [amount, setAmount] = useState(0);

    const [error, setError] = useState(null);

    const [loaded, setLoaded] = useState(false);
    const [transfers, setTransfers] = useState({});

    const getMovements = async () => {
        let id = parseInt(user?.id)
        if (isNaN(id)) return

        const data = (await axios.get('https://apibank.ikoodi.site/api/movements/' + (id + 1)))
        if (data) setTransfers(data.data)
        setLoaded(true)
    }

    async function submitTransaction(e) {
        const data = await axios.post('https://apibank.ikoodi.site/api/movements/', {
            "amount": parseInt(amount),
            "account_recive": account,
            "id": user?.id,
            "token": user?.token,
        })

        if (data.data["new_money"]) setUser({
            ...user,
            "money": data.data["new_money"]
        })
    }

    useEffect(() => { getMovements() }, [])

    return loaded ? <Stack className='dashboard' direction="row" justifyContent="space-around" flexWrap="wrap">

        <Stack className='small'>
            <span className='balance'>{Math.floor(user?.money* 100)/100}$</span>
        </Stack>

        <Stack className="main" gap="1rem">
            <TextField
                error={error != null}
                type='text'
                label="Account"
                value={account.replace(/(?![0-9])./g , "") || ""}
                onChange={({ target: { value } }) => setAccount(value)}
            />
            <TextField
                error={error != null}
                label="Amount"
                helperText={error}
                type='number'
                onChange={({ target: { value } }) => setAmount(value)}
            />
            <Button variant="contained" onClick={submitTransaction}>
                Send
            </Button>
        </Stack>

    </Stack> : <Loading/>
}