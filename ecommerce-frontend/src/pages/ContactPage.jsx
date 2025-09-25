import React, {useState, useEffect} from 'react'
import { Container, Button, AppBar, TextField, IconButton, Toolbar, Typography } from '@mui/material'

function ContactPage() {

    const [contact, setContact] = useState({
        name: '',
        lastname: '',
        email: '',
        message: ''
    })

    const handleSubmit = () => {

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setContact({
            ...contact,
            [name]: value,
        })
    }

  return (
    <Container sx={{marginTop: '20px'}}>
        <form onSubmit={handleSubmit}>
            <TextField fullWidth
            label="Nombre"
            margin='normal'
            name='name'
            value={contact.name}
            onChange={handleChange}
            required
            />
            <TextField fullWidth
            label="Apellido"
            margin='normal'
            name='lastname'
            value={contact.lastname}
            onChange={handleChange}
            required
            />
            <TextField fullWidth
            label="Email"
            margin='normal'
            name='email'
            value={contact.email}
            onChange={handleChange}
            required
            />
            <TextField fullWidth
            label="Mensaje"
            margin='normal'
            name='message'
            value={contact.message}
            onChange={handleChange}
            multiline
            rows={5}
            required
            />
            <Button variant='contained' type='Submit' sx={{mt:2}}>Enviar</Button>
        </form>
    </Container>
  )
}

export default ContactPage
