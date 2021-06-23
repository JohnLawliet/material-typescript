import { useState } from "react"
import { useEffect } from "react"
import { Container } from "@material-ui/core"
import NoteCard from '../../components/cards/cards.component'
import { INote } from "../../commonTypes"
import services from "../../services"
import Masonry from "react-masonry-css"

const Notes = () => {
    const [notes, setNotes] = useState<INote[]>([])
    const [error, setError] = useState<string | undefined>("")

    const fetchData = async () => {
        const res = await services.getData()
        if (res.status!==200){
            setError(res.data)
        }
        else setNotes(res.data)
    }

    const deleteNote = async (id:number) => {
        try{
            await services.deleteData(id)
            fetchData()
        }
        catch(e){
            setError(e)
        }        
    }

    useEffect(() => {
        fetchData()        
    },[setNotes])

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        <Container>
        {
            error?
            <p>{error}</p> :
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
            {
                notes?.map(note => (
                    <div 
                        key={note.id}
                    >
                        <NoteCard note={note} deleteNote={deleteNote} />
                    </div>
                ))
            }
            </Masonry>
            
        }                    
        </Container>
    )
}

export default Notes
