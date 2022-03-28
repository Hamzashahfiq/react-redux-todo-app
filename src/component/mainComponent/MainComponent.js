import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function MainComponent() {
    return (
        <Container disableGutters maxWidth="false">
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
            <Box sx={{ bgcolor: 'red', height: '100vh' }} />

        </Container>
    )
}
