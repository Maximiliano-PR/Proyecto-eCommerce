import React, {useState, useEffect} from 'react'
import { getAllProducts } from '../api/product.api'
import Loader from '../components/Loader'
import { Container, TableRow, Table, TableBody, TableCell, TableHead, TableContainer, Paper, Avatar } from '@mui/material'
import FormProduct from '../components/FormProduct'

function PanelPage() {
    const [products, setProducts] = useState([])
    const [load, setLoad] = useState(false)
    
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = (param) => {
        setLoad(true)
        getAllProducts(param).then((response) =>{
            setTimeout(() => {
                setProducts(response.data)
                setLoad(false)
            }, 1000)
        })
    }

    return (
        <Container>
            <FormProduct fetchData={fetchData}></FormProduct>
            <br />
            <TableContainer component={Paper}>
                <Table sx={{minWidth:650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell align='right'>Precios</TableCell>
                            <TableCell>Imagen</TableCell>
                            <TableCell align='right'>Catálogo</TableCell>
                            <TableCell align='right'>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => 
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell><Avatar alt='Product Image' src={row.image}/></TableCell>
                                <TableCell sx={{ fontWeight: '800'}} component='th' scope='row'> 
                                    {row.name}
                                </TableCell>
                                <TableCell align='right'>$ {row.price}</TableCell>
                                <TableCell align='right'>{row.catalog}</TableCell>
                                <TableCell align='right'>Acciones</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default PanelPage
