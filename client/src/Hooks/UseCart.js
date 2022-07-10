import { useState} from "react"
export function UseCart() {
    function AddCart(id, cart){
        console.log("add cart")
        console.log(cart)
        if(cart.inventory == null){
            cart.inventory = {
                [id]:{
                    amount: 1
                }
            }
        }else{
            if(cart.inventory.hasOwnProperty(id)){
                cart.inventory[id].amount++
            }else{
                cart.inventory = {
                    ...cart.inventory,
                    [id]:{
                        amount: 1
                    }
                }
            }
        }
        GetTotal(cart)
        
    }
    function RemoveCart(id, cart){

    }
    function GetTotal(cart){
        let amount = 0
        for(const item in cart.inventory){
            amount += cart.inventory[item].amount
            
        }
        cart.amount = amount;

    }
    function ClearCart(cart){

    }
    return {AddCart, RemoveCart, ClearCart, GetTotal};
}