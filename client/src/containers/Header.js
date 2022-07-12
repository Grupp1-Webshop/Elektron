import { Menu, Logotype, Icon } from "../compontents"
import { useEffect, useState, useContext, useRef } from "react";
import { UseCategories } from "../Hooks/UseCategories";
import { UseCart } from "../Hooks/UseCart";
import CartContext from "../Context/CartContext";
import AuthContext from "../Context/AuthContext";
import Cart from "../img/icons/cart.svg"
import login from "../img/icons/login.svg"


export function Header(){
    const {getCategories, categories} = UseCategories();
    useEffect(() => {
        getCategories()
    }, []);
    const {cartAmount} = useContext(CartContext)
    const {user} = useContext(AuthContext)
    return <header>
        <Logotype>
            <Logotype.Img></Logotype.Img>
        </Logotype>
        <div className="menu">
        <Menu>
            <Menu.List>
               <Menu.Item white to="/">Startsida</Menu.Item>
               {
                categories.map(category =>{
                    return <Menu.Item white to={`category/${category.categoryId}`}>{category.name}</Menu.Item>
                })
               }
            </Menu.List>
        </Menu>
        </div>
        <div className="actionbar">
        <Menu>
            <Menu.List>
                {
                    user !== null ? (
                        <>
                            {
                                user.userRole.includes("Admin") ? (
                                    <Menu.DropdownList label="admin">
                                        <Menu.Item white to="admin/products">Products</Menu.Item>
                                        <Menu.Item white to="admin/categories">Categories</Menu.Item>
                                        <Menu.Item white to="admin/pictures">Pictures</Menu.Item>
                                        <Menu.Item white to="admin/orders">Orders</Menu.Item>
                                    </Menu.DropdownList>
                                ) : ('')
                            }
                            <Menu.DropdownList label={<>
                                {user.userName}<Icon src={login}></Icon>
                            </>}>
                                <Menu.Item white to="change">Change password</Menu.Item>
                                <Menu.Item white to="logout">Logga ut</Menu.Item>
                                
                            </Menu.DropdownList>
                        </>
                    ): (
                        <Menu.Item white to="login">Logga in<Icon src={login}></Icon></Menu.Item>
                    )
                }
                
                <Menu.Item to="checkout"><Icon src={Cart}></Icon>{cartAmount}</Menu.Item>
            </Menu.List>
        </Menu>
        </div>
    </header>
}