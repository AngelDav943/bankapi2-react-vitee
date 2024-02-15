import { Typography, Button, TextField, Box, Stack } from '@mui/material'
import './loading.css'

export default function() {
    return <Stack justifyContent="center" alignItems="center" className="loadingbox">
        <img className='icon' src="/loading.svg" alt="" color='white'/>
    </Stack>
}