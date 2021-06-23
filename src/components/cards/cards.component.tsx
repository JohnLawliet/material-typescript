import { INote } from "../../commonTypes"
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { DeleteOutlined } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core"
import { blue, green, pink, yellow } from "@material-ui/core/colors"


// used any here as otherwise typescript throws an error as the component receives null object 
// on first load
const useStyles = makeStyles({
    avatar:{
        backgroundColor: (note:any) => {
            switch(note.category){
                case 'work' : return yellow[700]
                case 'money' : return green[500]
                case 'todos' : return pink[500]
                default: return blue[500]
            }
        }
    }
})

// useReducer here to delete a note which would affect the parent also
const NoteCard = (props: {note:INote, deleteNote: any}) => {
    const {title, details, category, id } = props.note
    const {deleteNote} = props
    const classes = useStyles(props.note)

    return (
        <Card elevation={1} >
            <CardHeader 
                avatar={
                    <Avatar className={classes.avatar}>
                    {
                        category[0].toUpperCase()
                    }
                    </Avatar>
                }
                action={
                <IconButton onClick={() => {
                    console.log("bru")
                    deleteNote(id)
                }}>
                    <DeleteOutlined />
                </IconButton>}
                title={title}
                subheader={category}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {details}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default NoteCard
