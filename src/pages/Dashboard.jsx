import { Typography, Button, TextField, Box, Stack, Skeleton } from '@mui/material'
import { useState, useEffect } from 'react';
import axios from 'axios';

import './dashboard.css'
import Loading from '../components/Loading';
import Transaction from '../components/Transaction';

export default function ({ user }) {

    const [loaded, setLoaded] = useState(false);
    const [transfers, setTransfers] = useState({});

    const getMovements = async () => {
        let id = parseInt(user?.id)
        if (isNaN(id)) return

        const data = (await axios.get('https://apibank.ikoodi.site/api/movements/' + (id)))
        if (data) setTransfers(data.data)
        setLoaded(true)
    }

    useEffect(() => { getMovements() }, [])

    return loaded ? <Stack className='dashboard' direction="row" justifyContent="space-around" flexWrap="wrap">
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
    </Stack> : <Loading/>
}