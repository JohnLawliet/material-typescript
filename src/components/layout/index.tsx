import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Toolbar from '@material-ui/core/Toolbar'
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useHistory, useLocation } from 'react-router-dom';
import {format} from 'date-fns'
import { useStyles } from './layout.styles';
import { AuxProps, IMenu } from './types'
 


// useLocation is a function in react router dom to determine which page we are on
const Layout = ({children}:AuxProps) => {
    const history = useHistory()
    const {page, drawer, root, drawerPaper, active, avatar, title, appbar, toolbar, date} = useStyles()
    const location = useLocation()

    const menuItems:IMenu[] = [
        {
            text: "My Notes",
            icon: <SubjectOutlinedIcon color="secondary" />,
            path: '/'
        },
        {
            text: "Create Note",
            icon: <AddCircleOutlineOutlinedIcon color="secondary" />,
            path: '/create'
        },
    ]

    return (
        <div className={root}>
            <AppBar
                className={appbar}
                elevation={0}
            >
                <Toolbar>
                    <Typography className={date}>
                    Today is the { format(new Date(), 'do MMMM Y') }
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                    <Avatar src="mario-av.png" className={avatar}/>
                </Toolbar>
            </AppBar>

            <Drawer 
                className={drawer}
                variant="permanent"
                anchor="left"
                classes={{
                    paper: drawerPaper
                }}
            >
                <div>
                    <Typography variant="h5" className={title}>
                        NINJA LIST
                    </Typography>
                </div>
                <List>
                {
                    menuItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={
                                location.pathname === item.path?
                                active:
                                undefined
                            }
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText 
                                primary={item.text}
                            />
                        </ListItem>
                    ))
                }
                </List>
            </Drawer>

            <div className={page}>
                <div className={toolbar}></div>
                    {children}
                
            </div>

        </div>
    )
}

export default Layout
