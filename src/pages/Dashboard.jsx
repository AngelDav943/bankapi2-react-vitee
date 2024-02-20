import { Typography, Button, TextField, Box, Stack, Skeleton } from '@mui/material'
import { useState, useEffect } from 'react';
import axios from 'axios';

import './dashboard.css'
import Transaction from '../components/Transaction';
import { useInfo } from '../context/useInfo';

export default function () {
    const { user, loaded, setLoaded } = useInfo();
    
    const [transfers, setTransfers] = useState(null);

    const getMovements = async () => {
        setLoaded(false);
        let id = parseInt(user?.id)
        if (isNaN(id)) return

        const data = (await axios.get('https://apibank.ikoodi.site/api/movements/' + (id)))
        if (data) setTransfers(data.data)
        setLoaded(true)
    }

    useEffect(() => { getMovements() }, [])

    return <Stack className='dashboard' direction="row" justifyContent="space-around" flexWrap="wrap">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <span>Welcome back, {user?.name}</span>
            <span className='account'>No. {user?.account}</span>
        </Stack>

        <Stack className='small'>
            <span className='balance'>{Math.floor(user?.money* 100)/100}$</span>
        </Stack>
        <Stack className='small' alignItems="strech">
            <h3>Transaction history</h3>
            <Stack className="history" >
                {transfers && transfers.map((transfer, index) => (
                    <Transaction key={index} info={transfer} />
                ))}
            </Stack>
        </Stack>
    </Stack>
}