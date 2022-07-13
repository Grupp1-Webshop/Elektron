import { BigThumb } from "../compontents";
export function CategoryList(props){
    let categories = props.categories;
    return <>
        {
            categories.map(category => {
                return <BigThumb to={`/category/${category.categoryId}`}>
                    <BigThumb.Picture src={`http://localhost:5207/${category.picture.uri}`} alt={category.picture.alt}/>
                    <BigThumb.Title>{category.name}</BigThumb.Title>
                </BigThumb>
            })
        }
    </>
}