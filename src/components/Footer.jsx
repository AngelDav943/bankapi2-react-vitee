import { Link, useLocation } from 'react-router-dom'
import './footer.css'
import { Typography, Button, TextField, Box, Stack } from '@mui/material'
import { useEffect, useState } from 'react'

export default function () {
    const location = useLocation();

    const locations = {
        "Home": "/home",
        "Transactions": "/transactions"
    }

    const [selected, setSelected] = useState(location.pathname);
    function FooterLink({location}) {
        const isSelected = selected.includes(locations[location])
        return <Link to={locations[location]} className={isSelected ? "selected" : ""}>{location}</Link>
    }

    useEffect(() => {
        console.log("changed...", location.pathname)
        setSelected(location.pathname);
    }, [location.pathname])

    return <Box className={`footer`}>
        <Stack className='main' direction="row" justifyContent="space-evenly" alignItems="center">
            {Object.keys(locations).map(key => (
                <FooterLink key={key} location={key}/>
            ))}
        </Stack>
    </Box>
}