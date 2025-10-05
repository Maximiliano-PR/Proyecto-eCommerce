import React, { createContext, useContext, useState } from "react";
const CartContex = createContext();

export const useCart = () => {
    // Si la aplicación fallaba, probablemente el error era:
    // "Cannot read properties of undefined (reading 'cart')"
    return useContext(CartContex);
}

// Corregido: 'children' con minúscula.
export const CartProvider = ({ children }) => { 
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const existingCartItem = cart.find((cartItem) => cartItem.product._id === product._id);
        
        if (existingCartItem){
            if (existingCartItem.quantity < product.stock){
                const updatedCart = cart.map((cartItem) => {
                    if (cartItem.product._id === product._id) {
                        return { ...cartItem, quantity: cartItem.quantity + 1}
                    }
                    return cartItem;   
                });
                setCart(updatedCart);
            }
        } else {
            if (product.stock > 0) {
                setCart([...cart, {product, quantity: 1}])
            }
        }
    }; 

    const removeFromCart = (item) =>{
        const updatedCart = cart.filter((cartItem) => cartItem.product._id !== item.product._id)
        setCart(updatedCart)
    }

    return (
        // Corregido: Esta es la sentencia return principal de CartProvider
        <CartContex.Provider value ={{cart, addToCart, removeFromCart}}> 
            {children} {/* Corregido: 'children' con minúscula */}
        </CartContex.Provider>
    )
}