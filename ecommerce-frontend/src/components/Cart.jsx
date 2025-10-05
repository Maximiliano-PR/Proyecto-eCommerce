import React, {useState} from 'react'
import { IconButton, Badge, Popover, Paper, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import DeleteIcon from '@mui/icons-material/Delete'
import {useCart} from '../context/CartContext'

const Cart = () => {

    const [anchorE1, setAnchorE1] = useState(null);
    const open = Boolean(anchorE1);
    const { cart, removeFromCart} = useCart()
    const total = calculateTotalPrice(cart)

    const handleCartClick = (event) => {
        setAnchorE1(event.currentTarget)
    }

    const handleCartClose = () =>{
        setAnchorE1(null)
    }

    const handleRemoveItem = (item) =>{
        removeFromCart(item)
    }

    const handleCheckout = () =>{
        alert('Checkout Successful!')
        handleCartClose()
    }

    function calculateTotalPrice(cart) {
        let total = 0;
        for (const item of cart) {
            total += item.product.price * item.quantity
        }
        return total
    }



    return(
        <div>
            <Badge badgeContent={cart.length} color="secondary">
                <IconButton color='inherit' aria-label='Shopping Cart' onClick={handleCartClick}>
                    <ShoppingCartIcon/>
                </IconButton>
            </Badge>
            <Popover
                open={open}
                anchorEl={anchorE1}
                onClose={handleCartClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <Paper>
                    <Typography sx={{padding: 2}}>
                        Mi carrito de compras
                    </Typography>
                    {cart.length > 0 ? (
                        <>
                            <List>
                                {cart.map((item, index) => (
                                    <ListItem key={index}>
                                        <ListItemAvatar>
                                            <Avatar alt="Product Image" src={item.product.image}></Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={`${item.product.name} (Cant.: ${item.quantity})`} secondary={item.product.price ? `$${item.product.price.toFixed(2)}` : ''}></ListItemText>
                                        <IconButton
                                            color='error'
                                            arial-label="delete"
                                            onClick={() => handleRemoveItem(item)} 
                                        >
                                            <DeleteIcon/>
                                        </IconButton>
                                    </ListItem>
                                ))}
                            </List>
                            <Typography variant="h6" sx={{ textAling:'right'}}>
                                Total Carrito: ${total.toFixed(2)}
                            </Typography>
                            <div>
                                <Button variant='contained' color="primary" onClick={handleCheckout}>
                                    Checkout
                                </Button>
                            </div> 
                        </>
                    ) : (
                        <Typography variant='body2'>Su carrito esta vacío</Typography>
                    )}
                </Paper>
            </Popover>
        </div>
    )
}

export default Cart
