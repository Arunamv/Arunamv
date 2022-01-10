import { Toolbar, Typography,Button, AppBar,Avatar, makeStyles } from "@material-ui/core";
import useStyles from './MyStyle'
import { format } from 'date-fns';
import { useHistory } from 'react-router-dom'
import { auth } from '../Firebase'
 
function MyAppbar(){
    const classes=useStyles();
    const history = useHistory();
    const logout=()=>{auth.signOut();
    }
    return(
         <AppBar position='fixed' elevation={1}>
             <Toolbar className={classes.toolbar}>
                 
                 <Typography className={classes.date}>
                  Today Date is   { format( new Date(),'do MMMM Y') }
                 </Typography>
                 <Button 
                 onClick={logout}
                 type="submit"
                 color="grey"
                 variant="contained"
                 style={{marginRight:'2%',backgroundColor:'pink'}}>
                  LogOut
                 </Button>
                 
                 <Typography style={{marginRight:'1%'}}>
                  Aruna
                 </Typography>
                 <Avatar src='/aruna1.jpg'/>
             </Toolbar>
         </AppBar>
    )
}
export default MyAppbar