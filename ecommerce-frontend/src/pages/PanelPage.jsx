import React, {useState, useEffect} from 'react'
import { getAllProducts } from '../api/product.api'
import Loader from '../components/Loader'
import { Container, TableRow, Table, TableBody, TableCell, TableHead, TableContainer, Paper, Avatar, IconButton } from '@mui/material'
import FormProduct from '../components/FormProduct'
import DeleteIcon from '@mui/icons-material/Delete'
import UpdateIcon from '@mui/icons-material/Edit'
import { removeProduct } from '../api/product.api'
import { updateProduct } from '../api/product.api'

function PanelPage() {
    const [products, setProducts] = useState([])
    const [load, setLoad] = useState(false);
    const [open, setOpen] = useState(false);

    const [product, setProduct] = useState({
        name: '',
        catalog: '',
        image: '',
        description: '',
        price: 0,
        stock: 0
    })

    const handleClickOpen = () => {
        setProduct({
            name: '',
            catalog: '',
            image: '',
            description: '',
            price: 0,
            stock: 0
        })
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

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

    const handleRemoveItem = (id) => {
        removeProduct(id).then((response) => {
            if (response) {
                fetchData()
            }
        }).catch((error) => {
                alert(error)
            })
    }

    const handleUpdateItem = (item) => {
        setProduct(item)
        setOpen(true)
    }
    
    

    return (
        <Container>
                <FormProduct product={product} handleClose={handleClose} handleClickOpen={handleClickOpen} open={open} fetchData={fetchData}></FormProduct>
                <br />
                <TableContainer component={Paper}>
                    <Table sx={{minWidth:650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Imagen</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell align='right'>Precios</TableCell>
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
                                    <TableCell align='right'>
                                        <IconButton color='inherit' aria-label='Editar' onClick={() => handleUpdateItem(row)}>
                                            <UpdateIcon/>
                                        </IconButton>
                                        <IconButton color='inherit' aria-label='Eliminar' onClick={() => handleRemoveItem(row._id)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
        </Container>
    )
}

export default PanelPage
