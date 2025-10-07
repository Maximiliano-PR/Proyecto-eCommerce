import React from 'react'
import { Link } from 'react-router'
import { AppBar, Container, Divider, IconButton, Toolbar, Typography, Button, Box } from '@mui/material'
import Cart from '../components/Cart'

function Header() {
  return (
    <div>
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    Tienda Online
                </Typography>
                <Box sx={{flexGrow:1, display: {xs: 'none', md: 'flex'}, alignItems: 'center'}}>
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
                    <Link to='/Contact' style={{ textDecoration: "none", color: "inherit" }}>
                        <Button
                            sx={{my: 2, marginRight: 3, color: 'white', display: 'block', border: 2}}>
                            Contacto
                        </Button>
                    </Link>
                    <span>
                        <Cart sx={{my: 2, marginRight: 3, color: 'white', display: 'block', border: 2}}></Cart>
                    </span>
                </Box>

                <Link to='/panel' style={{ textDecoration: "none", color: "inherit" }}>
                    <Button 
                        sx={{my: 2, marginRight: 3, color: 'white', display: 'block', border: 2}}>
                        Acceso Admin
                    </Button>
                </Link>
            </Toolbar>
        </AppBar> 
        <Divider style={{marginBottom: 20}}></Divider>
    </div>
  )
}

export default Header
