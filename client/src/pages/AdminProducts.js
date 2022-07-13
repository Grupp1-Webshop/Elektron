import { useEffect, useState, useContext } from "react"
import { Main, SmallThumb, Panel, Form } from "../compontents"
import { UseCategories } from "../Hooks/UseCategories"
import { UsePictures } from "../Hooks/UsePicture";
import { UseProduct } from "../Hooks/UseProduct";
import AuthContext from "../Context/AuthContext";
import {useNavigate} from 'react-router-dom';
export function AdminProducts(){
    const {getCategories, categories} = UseCategories();
    const {getProducts,addProduct, editProduct, deleteProduct, product} = UseProduct()
    const [edit, setEdit] = useState(false)
    const [editId, setEditId] = useState(0)
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState(1);
    const {getPictures, pictures} = UsePictures();
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleChange = (event) => {
        if(event.target.name == "name"){
            setName(event.target.value);
        }
        if(event.target.name == "description"){
            setDescription(event.target.value);
        }
        if(event.target.name == "shortDescription"){
            setShortDescription(event.target.value);
        }
        if(event.target.name == "price"){
            setPrice(event.target.value);
        }
        if(event.target.name == "category"){
            setCategory(event.target.value);
            console.log(event.target.value)
        }

    }
    const handle = (event) => {
        event.preventDefault()
        if(edit){
            console.log(category)
            editProduct(name, description, shortDescription, price, category, image, editId)
        }else{
            addProduct(name, description, shortDescription, price, category, image)
        }
        
        
    }
    const initEdit = (name, shortDescription, description , price , picture, categoryId, id) =>{
        console.log(categoryId)
        setImage(picture)
        setName(name)
        setDescription(description)
        setShortDescription(shortDescription)
        setPrice(price)
        setCategory(categoryId)
        setEdit(true)
        setEditId(id)
    }
    useEffect(() =>{
        
        getProducts()
        getPictures()
        getCategories()
    }, [])
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
        <Main.Title>Products</Main.Title>
        <Main.Content>
            {
                product != null ? (
                    
                    product.map((item) =>{
                        return <SmallThumb>
                            {console.log(item)}
                            <SmallThumb.Title to={`/product/${item.productId}`}>{item.name}</SmallThumb.Title>
                            <SmallThumb.Picture src={`http://localhost:5207/${item.picture.uri}`}/>
                            <SmallThumb.Description>{item.description}</SmallThumb.Description>
                            <SmallThumb.Description>{item.shortDescription}</SmallThumb.Description>
                            <SmallThumb.Price>{item.price}</SmallThumb.Price>
                            <SmallThumb.Delete onClick={() => deleteProduct(item.productId)}>Delete</SmallThumb.Delete>
                            <SmallThumb.Edit onClick={() => initEdit(item.name, item.shortDescription, item.description , item.price , item.picture.pictureId, item.categoryId, item.productId)}>Edit</SmallThumb.Edit>
                        </SmallThumb>
                    })
                ) : ('')
                
            }
        </Main.Content>
        <Panel>
            <Panel.Title>{edit ? ('Edit') : ('Add')} Category</Panel.Title>

            <Form onSubmit={handle}>
                <Form.Input onChange={handleChange} value={name} name="name" label="name"></Form.Input>
                <Form.Input onChange={handleChange} value={description} name="description" label="description"></Form.Input>
                <Form.Input onChange={handleChange} value={shortDescription} name="shortDescription" label="shortDescription"></Form.Input>
                <Form.Input onChange={handleChange} value={price} name="price" label="price"></Form.Input>
                <Form.Select onChange={handleChange} value={category}  name="category" label="category">
                    {
                        categories != null ? (
                            
                            categories.map((item) =>{
                                return <Form.Option  value={item.categoryId}>{item.name}</Form.Option>
                            })
                        ) : ('')
                        
                    }
                </Form.Select>
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