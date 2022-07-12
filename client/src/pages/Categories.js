import { useEffect } from "react";
import {
    useParams
} from "react-router-dom";
import { Main } from "../compontents"
import { CategoryList } from "../containers/CategoryList";
import { UseCategories } from "../Hooks/UseCategories";
export function Categories() {
    let { id } = useParams();
    const { getCategories, categories } = UseCategories();
    useEffect(() => {
        getCategories(id)
    }, []);

    return <Main>
        <Main.Title>{"Categories"}</Main.Title>
        <Main.Content>
            {
                category.categories != undefined ? (
                    <CategoryList categories={categories} max={0} />
                ) : ('')
            }

        </Main.Content>
    </Main>

}