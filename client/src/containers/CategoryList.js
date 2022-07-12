import { BigThumb } from "../compontents";
export function CategoryList(props) {
    let categories = props.categories;
    return <>
        {
            categories.map(category => {
                return <BigThumb>
                    {
                        category.picture !== null ? (
                            <BigThumb.Picture src={`http://localhost:5207/${category.picture['uri']}`} ></BigThumb.Picture>
                        ) : ('')
                    }
                    <BigThumb.Title to={`/category/${category.categoryId}`}>{category.name}</BigThumb.Title>
                    
                    
                </BigThumb>
            })
        }
    </>
}