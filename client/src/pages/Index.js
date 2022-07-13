import React from "react";
import { useEffect } from "react";

import { Main } from "../compontents"
//import { ProductList } from "../containers/ProductList";
//import { UseProduct } from "../Hooks/UseProduct";
import { CategoryList } from "../containers/CategoryList";
import { UseCategories } from "../Hooks/UseCategories";


export function Index() {
    		
    const { getCategories, categories } = UseCategories();
    useEffect(() => {
        getCategories()
        
    }, []);

    return <Main>

        <Main.Title>{"Categories"}</Main.Title>
        <Main.Content>
        {
                categories !== null ? (
                    <CategoryList categories={categories} max={0} />
                ) : ('')
            }

        </Main.Content>
    </Main>
    
}