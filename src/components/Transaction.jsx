import './transaction.css'
import { Typography, Button, TextField, Box, Stack } from '@mui/material'

export default function({ info }) {
    // console.log(info)
    return <Stack className='transfer'>
        <p>{ info["name_user_recive"] }</p>
        <p>{ info["amount"] }</p>
    </Stack>
}