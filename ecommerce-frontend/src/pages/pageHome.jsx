import {getAllProducts} from "../api/product.api";
import {Button, Container, TextField} from "@mui/material"
import SearchIcon from '@mui/icons-material/Send';
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Feed from "../components/Feed"
import Loader from "../components/Loader";


function PageHome() {
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [load, setLoad] = useState(false)

    useEffect(() => {
        fetchData();
    }, [])

    //es la logica del filtro: pregunta si existe y si lo hace lo toma
    const handleFilter=()=>{
        searchTerm ? fetchData(searchTerm) : fetchData('')
    }

    const fetchData = (param) => {
        setLoad(true)
        getAllProducts(param).then((response) =>{
            setTimeout(() => {
                setProducts(response.data)
                setLoad(false)
            }, 1000)
        })
    }

    return(

        <Container>
            <Grid container spacing={2}>
                <TextField placeholder="Escriba su busqueda"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} //capturamos el valor del fitro
                />
                <Button variant="outlined" onClick={handleFilter}  endIcon={<SearchIcon />} >Buscar</Button> 
            </Grid>
            {
                load ?
                <Loader/>
                :
                <Grid container spacing={2}>
                    {products.map((product, idx) => (
                        <Grid item key = {idx} xs = {12} sm = {6} md = {4} lg={3}>
                            <Feed product = {product}/>
                        </Grid>
                    ))}
                </Grid>
            }
        </Container>
    )
}

export default PageHome;