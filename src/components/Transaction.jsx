import './transaction.css'
import { Typography, Button, TextField, Box, Stack } from '@mui/material'

export default function({ info }) {
    // console.log(info)
    return <Stack className='transfer' direction="row" justifyContent="space-between" alignItems="center">
        <p>{ info["name_user_recive"] }</p>
        <span className='amount'>{ info["amount"] }$</span>
    </Stack>
}