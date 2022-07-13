import { useEffect, useState, useContext } from "react"
import { Main, SmallThumb, Panel, Form } from "../compontents"
import { UseCategories } from "../Hooks/UseCategories"
import { UsePictures } from "../Hooks/UsePicture";
import AuthContext from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"
export function AdminCategories(){
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const {getCategories, removeCategories, addCategories, editCategories, categories} = UseCategories();
    const {getPictures, pictures} = UsePictures();
    const [edit, setEdit] = useState(false)
    const [editId, setEditId] = useState(0)
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    useEffect(() => {
        getCategories()
        getPictures()
    }, [])
    useEffect(() => {
        console.log(image)
    }, [image])
    
    const handle = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const picture = event.target.picture.value
        if(edit){
            editCategories(name, picture, editId)
        }else{
            addCategories(name, picture)
        }
        
        
    }
    const handleChange = (event) => {
        setName(event.target.value);

    }
    const initEdit = (name, picture, id) =>{
        console.log(name, picture)
        setImage(picture)
        setName(name)
        setEdit(true)
        setEditId(id)
    }
    const deleteCategory = (id) => {
        removeCategories(id)
    }
    let checked = false;
    useEffect(() => {
        
        if(user != null){
            if(!user.userRole.includes("Admin")){
                navigate('/');
            }
            
        }else if(checked){
            navigate('/');
        }
        checked = true;
        
    }, [user])
    return <Main>
        <Main.Title>Categories</Main.Title>
        <Main.Content>
            {
                categories != null ? (
                    
                    categories.map((category) =>{
                        return <SmallThumb>
                            {console.log(category)}
                            <SmallThumb.Title to={`/category/${category.categoryId}`}>{category.name}</SmallThumb.Title>
                            <SmallThumb.Picture src={`http://localhost:5207/${category.picture.uri}`}/>
                            <SmallThumb.Delete onClick={() => deleteCategory(category.categoryId)}>Delete</SmallThumb.Delete>
                            <SmallThumb.Edit onClick={() => initEdit(category.name, category.picture.pictureId, category.categoryId)}>Edit</SmallThumb.Edit>
                        </SmallThumb>
                    })
                ) : ('')
                
            }
            
        </Main.Content>
        <Panel>
            <Panel.Title>{edit ? ('Edit') : ('Add')} Category</Panel.Title>

            <Form onSubmit={handle}>
                <Form.Input onChange={handleChange} value={name} name="name" label="name"></Form.Input>
                <Form.Input  type="hidden" name="picture" value={image}></Form.Input>
                <Form.PicturePicker>
                    {
                        pictures != null ? (
                            
                            pictures.map((picture) =>{
                                return <SmallThumb onClick={() => setImage(picture.pictureId)}>
                                    {image == picture.pictureId ? (<Form.Selected><SmallThumb.Picture src={`http://localhost:5207/${picture.uri}`}></SmallThumb.Picture></Form.Selected>) : (<SmallThumb.Picture src={`http://localhost:5207/${picture.uri}`}></SmallThumb.Picture>)}
                                    
                                    <SmallThumb.Description>{picture.alt}</SmallThumb.Description>
                                </SmallThumb>
                            })
                        ) : ('')
                        
                    }
                </Form.PicturePicker>
                <Form.Button>Lägg till</Form.Button>

            </Form>
        </Panel>
    </Main>
    
}