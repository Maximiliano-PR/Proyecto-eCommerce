import React from 'react'
import { Link } from 'react-router'
import { AppBar, Container, Divider, IconButton, Toolbar, Typography, Button, Box } from '@mui/material'


function Header() {
  return (
    <div>
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    Tienda Online
                </Typography>
                <Box sx={{flexGrow:1, display: {xs: 'none', md: 'flex'}}}>
                    <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
                        <Button
                            sx={{my: 2, marginRight: 3, color: 'white', display: 'block', border: 2}}>
                            Home
                        </Button>
                    </Link>
                    <Link to='/Terminos' style={{ textDecoration: "none", color: "inherit" }}>
                        <Button
                            sx={{my: 2, marginRight: 3, color: 'white', display: 'block', border: 2}}>
                            Terminos
                        </Button>
                    </Link>
                    <Button
                        sx={{my: 2, marginRight: 3, color: 'white', display: 'block', border: 2}}>
                        Contacto
                    </Button>
                    <Button
                        sx={{my: 2, marginRight: 3, color: 'white', display: 'block', border: 2}}>
                        Acerca de
                    </Button>
                </Box>
            </Toolbar>
        </AppBar> 
        <Divider style={{marginBottom: 20}}></Divider>
    </div>
  )
}

export default Header
