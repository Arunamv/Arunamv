
import { Typography, Drawer, makeStyles } from '@material-ui/core'
import { List,ListItem,ListItemIcon,ListItemText } from '@material-ui/core'
import {  useHistory, useLocation } from 'react-router-dom'
import  DashboardIcon from '@material-ui/icons/Dashboard'
import AssessmentIcon from '@material-ui/icons/Assessment'
import DevicesIcon from '@material-ui/icons/Devices'
import PeopleIcon from '@material-ui/icons/People'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'


const useStyles=makeStyles();

    function MyDrawer(){

    const classes=useStyles();
    const history=useHistory();
    const location=useLocation();

    const menuItems=[
        {
            text:'Dashboard',
            icon:<DashboardIcon  color='secondary'/>,
            path:'/'
        },
        {
            text:'Devices',
            icon:<DevicesIcon  color='secondary'/>,
            path:'/devices'
        },
        {
            text:'Users',
            icon:<PeopleIcon  color='secondary'/>,
            path:'/users'
        },
        {
            text:'Entity',
            icon:<LabelImportantIcon  color='secondary'/>,
            path:'/entity'
        },
        {
            text:'Reportes',
            icon:<AssessmentIcon  color='secondary'/>,
            path:'/reports'
        },
        
]
    return(
        <div className={classes.root} >
            <nav className={ classes.drawer }>
                <Drawer 
                className={classes.listStyle3}
                variant='permanent' 
                open
                anchor='left'
                classes={{paper:classes.drawerPaper}}>
                    <div>
                        <Typography variant='h5' className={classes.title}>
                            Dynamic
                        </Typography>
                    
                    
                    </div>
                    <List>
                        {menuItems.map((item) => (
                            <ListItem
                                button
                                key={item.text}
                                onClick={() => history.push(item.path)}
                                className={location.pathname == item.path ? classes.active : null}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                    
                    
                </Drawer>
        </nav>
        </div>
    )
}
export default MyDrawer
