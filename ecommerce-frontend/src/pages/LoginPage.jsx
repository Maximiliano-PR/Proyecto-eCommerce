import React, {useState} from 'react'
import {Button, Container, TextField} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import {login as logUser} from '../api/product.api'

const Login = ({onLogin}) => {
    const {login} = useAuth()
    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        })
    }

    const handleLogin = async () => {
        try{
            const response = await logUser({email: loginData.email, password: loginData.password});
            const { token } = response.data;

            //Guardamos el token en el localstorage
            localStorage.setItem('token', token)

            //Notificar login correcto
            login(token)
            navigate('/panel')
        }catch(error){
            if (error.response.status === 401){
                alert("Login fallido, intente nuevamente")
            } else {
                console.error('Login fallido por otros motivos', error);
                //manejo de error del login
            }
        }
    }

    return(
        <Container>
            <h4>Por favor, para acceder, identifiquese</h4>
            <form>
                <TextField fullWidth
                    label="Email"
                    margin='normal'
                    name='email'
                    value={loginData.email}
                    onChange={handleChange}
                ></TextField>
                <TextField fullWidth
                    label="Password"
                    margin='normal'
                    name='password'
                    type='password'
                    value={loginData.password}
                    onChange={handleChange}
                ></TextField>
                <Button variant='contained' type='button' onClick={handleLogin} sx={{mt:2}}>
                    Login
                </Button>
            </form>
        </Container>
    )

}

export default Login