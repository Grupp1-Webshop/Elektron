import { useEffect, useState } from "react"
import { Main, SmallThumb, Panel, Form } from "../compontents"
import { UsePictures } from "../Hooks/UsePicture"
export function AdminPictures(){
    const {pictures, getPictures, addPictures, removePictures} = UsePictures()
    useEffect(() => {
        getPictures()
    }, [])
    
    const [file, setFile] = useState([]);
    function fileChangeHandler(event){
        setFile(event.target.files[0])
    }
    const handler = (event) =>{
        event.preventDefault()
        const alt = event.target.alt.value
        addPictures(alt, file)
        
    }
    return <Main>
        <Main.Title>Pictures</Main.Title>
        <Main.Content>
            {
                pictures != null ? (
                    
                    pictures.map((picture) =>{
                        return <SmallThumb>
                            <SmallThumb.Picture src={`http://localhost:5207/${picture.uri}`}></SmallThumb.Picture>
                            <SmallThumb.Description>{picture.alt}</SmallThumb.Description>
                            <SmallThumb.Delete onClick={() => removePictures(picture.pictureId)}>Delete</SmallThumb.Delete>
                        </SmallThumb>
                    })
                ) : ('')
                
            }
            
        </Main.Content>
        <Panel>
            <Panel.Title>Add Picture</Panel.Title>
            <Form onSubmit={handler}>
                <Form.Input name="alt" label="Desciption"></Form.Input>
                <Form.Input onChange={fileChangeHandler} type="file" name="picture" label="Picture"></Form.Input>
                <Form.Button>Lägg till</Form.Button>
            </Form>
        </Panel>

    </Main>
    
}