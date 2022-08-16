import React from "react";
import { useEffect, useContext, useState} from "react";
import {
    useParams
} from "react-router-dom";
import { Main, FullProduct } from "../compontents"
import { UseProduct } from "../Hooks/UseProduct"
import CartContext from "../Context/CartContext";
export function Product(){
    let { id } = useParams();
    const {getProduct, product} = UseProduct();
    const {cart, addToCart} = useContext(CartContext)
    const [amount , setAmount] = useState(1)
    useEffect(() => {
        getProduct(id)
    }, []);
    const changeHandler = (event) =>{
        if(event.target.value >= 1){
            setAmount(event.target.value)
        }
        
    }
    return <Main>
        <Main.Content>
            <FullProduct>
                <FullProduct.Col>
                    {
                        product.picture != null ? (
                            <FullProduct.Picture src={`http://localhost:5207/${product.picture.uri}`} alt={product.picture.alt}/>
                        ) : (
                            <FullProduct.Picture src="img/placeholder_product.jpg"/>
                        )
                    }
                    
                </FullProduct.Col>
                <FullProduct.Col>
                    <FullProduct.Title>{product.name}</FullProduct.Title>
                    {
                        product.category != null ? (
                            <FullProduct.Category>{product.category.name}</FullProduct.Category>
                        ) : (''
                        )
                    }
                    
                    <FullProduct.Price>{product.price} kr</FullProduct.Price>
                    <FullProduct.Description>{product.description}</FullProduct.Description>
                    <FullProduct.NumberChanger value={amount} onChange={changeHandler}></FullProduct.NumberChanger>
                    <FullProduct.Button onClick={()=> addToCart(id, amount)} >Lägg till</FullProduct.Button>
                </FullProduct.Col>
            </FullProduct>
        </Main.Content>
    </Main>
    
}