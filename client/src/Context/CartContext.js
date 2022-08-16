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
    const addToCart = (id, amount) => {
        console.log("add to cart")
        console.log(cart)
        if(cart == null){
            console.log("cart was empty")
            console.log(cart)
            const tempcart = {
                [id]:{
                    amount: amount
                } 
            }
            console.log("created a cart")
            console.log(tempcart)
            window.localStorage.setItem('cart', JSON.stringify(tempcart));
            window.localStorage.setItem('cartAmount', JSON.stringify(1));
            setCart(tempcart)
            setCartAmount(amount);
        }else{
            if(cart.hasOwnProperty(id)){
                console.log("has one of this id")
                const tempCart = {...cart}
                
                tempCart[id].amount =  parseInt(tempCart[id].amount) + parseInt(amount)
                window.localStorage.setItem('cart', JSON.stringify(tempCart));
                window.localStorage.setItem('cartAmount', JSON.stringify(cartAmount+1));
                setCart(tempCart)
                countTotal(tempCart)
            }else{
                let tempCart = {...cart}
                tempCart = {
                    ...tempCart,
                    [id]:{
                        amount: amount
                    }
                }
                window.localStorage.setItem('cart', JSON.stringify(tempCart));
                window.localStorage.setItem('cartAmount', JSON.stringify(cartAmount+1));
                setCart(tempCart)
                countTotal(tempCart)
            }
        }
        
        
        
        
        
        
    };
    const setAmount = (id, amount) => {
        if(cart.hasOwnProperty(id)){
            if(amount > 0){
                console.log("has one of this id")
                const tempCart = {...cart}
                
                tempCart[id].amount = amount
                window.localStorage.setItem('cart', JSON.stringify(tempCart));
                countTotal(tempCart)
                setCart(tempCart)
            }
            
        }
    }
    const removeItem = (id) => {
        console.log("clicked")
        let tempCart = {...cart}
        console.log(tempCart)
        delete tempCart[id]
        console.log(tempCart)
        window.localStorage.setItem('cart', JSON.stringify(tempCart));
        countTotal(tempCart)
        setCart(tempCart)
    }
    const countTotal = (tempCart) => {
        let count = 0
        console.log(tempCart)
        for (const [key, value] of Object.entries(tempCart)) {
            count += parseInt(value.amount)
        }
        setCartAmount(count)
        window.localStorage.setItem('cartAmount', JSON.stringify(count));
    }
    const emptyCart = () => {
        setCartAmount(0)
        setCart([])
        window.localStorage.removeItem('cart')
    }
    return <CartContext.Provider value={{ cart, addToCart, cartAmount, emptyCart, setAmount, removeItem }}>
    {children}
    </CartContext.Provider>
}


export default CartContext;