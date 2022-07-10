import React from "react";
import { useEffect } from "react";
import {
    useParams
} from "react-router-dom";
import { Main } from "../compontents"
import { ProductList } from "../containers/ProductList";
import { UseCategory } from "../Hooks/UseCategory";
export function Category(){
    let { id } = useParams();
    const {getCategory, category} = UseCategory();
    useEffect(() => {
        getCategory(id)
    }, []);

    return <Main>
        <Main.Title>{category.name}</Main.Title>
        <Main.Content>
            {
                category.products != undefined ? (
                    <ProductList products={category.products} max={0}/>
                ) : ('')
            }
            
        </Main.Content>
    </Main>
    
}