import { SmallThumb } from "../compontents";
export function ProductList(props){
    let products = props.products;
    return <>
        {
            products.map(product => {
                return <SmallThumb>
                    {
                        product.picture !== null ? (
                            <SmallThumb.Picture src={`http://localhost:5207/${product.picture['uri']}`} ></SmallThumb.Picture>
                        ) : ('')
                    }
                    {
                       console.log(product) 
                    }
                    <SmallThumb.Title to={`/product/${product.productId}`}>{product.name}</SmallThumb.Title>
                    <SmallThumb.Description>{product.shortDescription}</SmallThumb.Description>
                    <SmallThumb.Price>{product.price} kr</SmallThumb.Price>
                </SmallThumb>
            })
        }
    </>
}