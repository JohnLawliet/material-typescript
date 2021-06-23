import { makeStyles } from "@material-ui/core"

const drawerWidth=240

export const useStyles = makeStyles((theme) => {
    return {
        page:{
            background: "#f9f9f9",
            width: "100%",
            padding: theme.spacing(3)
        },
        drawer: {
            width:drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth
        },
        root:{
            display: "flex"
        },
        active:{
            background: '#f4f4f4'
        },
        title: {
            padding:theme.spacing(2)
        },
        appbar: {
            width:`calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow:1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }
})