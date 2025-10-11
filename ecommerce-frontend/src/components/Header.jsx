import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router'
import { AppBar, Container, Divider, IconButton, Toolbar, Typography, Button, Box } from '@mui/material'
import Cart from '../components/Cart'
import { useAuth } from '../context/AuthContext'

function Header() {
    const{isUserLogged, logout, login} = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('token');
        if(isAuthenticated) {
            login(isAuthenticated)
        }
    }, [])

    const handleLogout = () => {
        logout()
        navigate('/')
    }

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
                    <Link hidden={!isUserLogged} to='/panel' style={{ textDecoration: "none", color: "inherit" }}>
                        <Button
                            sx={{my: 2, marginRight: 3, color: 'white', display: 'block', border: 2}}>
                            Panel Admin
                        </Button>
                    </Link>
                    <span>
                        <Cart sx={{my: 2, marginRight: 3, color: 'white', display: 'block', border: 2}}></Cart>
                    </span>
                </Box>

                <IconButton color='inherit' aria-label='Admin Access'>
                    <Typography variant='body1' sx={{pr:1}}>
                        { !isUserLogged ?
                            <Link to='/panel' style={{ textDecoration: "none", color: "inherit" }}>
                                Acceso Admin
                            </Link>
                            :
                            <Link onClick={handleLogout} style={{ textDecoration: "none", color: "inherit" }}>
                                Cerrar sesión
                            </Link>
                        }
                    </Typography>
                </IconButton>

            </Toolbar>
        </AppBar> 
        <Divider style={{marginBottom: 20}}></Divider>
    </div>
  )
}

export default Header
