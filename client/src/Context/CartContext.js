import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({children}){

    const [cart, setCart] = useState([])
    const [cartAmount, setCartAmount] = useState(0)
    useEffect(() =>{
        setCart(JSON.parse(window.localStorage.getItem('cart')));
        setCartAmount(JSON.parse(window.localStorage.getItem('cartAmount')));
    },[])
    useEffect(() =>{
        if(cartAmount === null){
            setCartAmount(0)
        }
    },[cartAmount])
    const addToCart = (id) => {
        console.log(cart)
        if(cart == null){
            console.log(cart)
            const tempcart = {
                [id]:{
                    amount: 1
                } 
            }
            console.log(tempcart)
            window.localStorage.setItem('cart', JSON.stringify(tempcart));
            window.localStorage.setItem('cartAmount', JSON.stringify(1));
            setCart(tempcart)
            setCartAmount(1);
        }
        if(cart.hasOwnProperty(id)){
            const tempCart = {...cart}
            
            tempCart[id].amount++
            window.localStorage.setItem('cart', JSON.stringify(tempCart));
            window.localStorage.setItem('cartAmount', JSON.stringify(cartAmount+1));
            setCart(tempCart)
        }else{
            let tempCart = {...cart}
            tempCart = {
                ...tempCart,
                [id]:{
                    amount: 1
                }
            }
            window.localStorage.setItem('cart', JSON.stringify(tempCart));
            window.localStorage.setItem('cartAmount', JSON.stringify(cartAmount+1));
            setCart(tempCart)
        }
        
        
        setCartAmount(cartAmount + 1);
        
        
    };
    const emptyCart = () => {
        setCartAmount(0)
        setCart([])
        window.localStorage.removeItem('cart')
    }
    return <CartContext.Provider value={{ cart, addToCart, cartAmount, emptyCart }}>
    {children}
    </CartContext.Provider>
}


export default CartContext;