import { useEffect } from "react";

import { Contact } from "../containers/Contact";
import { ProductList } from "../containers/ProductList";
import { CategoryList } from "../containers/CategoryList";
import { UseProduct } from "../Hooks/UseProduct";
import { UseCategories } from "../Hooks/UseCategories";
import { Main } from "../compontents";
export function Index() {
  const {getCategories, categories} = UseCategories();
  const {getProducts, product} = UseProduct();
  useEffect(() => {
    getCategories()
    getProducts()
  },[])
  return (
    <>
      <Main>
        <Main.Title>Produkter</Main.Title>
        <Main.Content>
          <ProductList products={product}/>
        </Main.Content>
        <Main.Title>Kategorier</Main.Title>
        <Main.ThreeCol>
          <CategoryList categories={categories}/>
        </Main.ThreeCol>
      </Main>
      <Contact />
      
      
    </>
  );
}
