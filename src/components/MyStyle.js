import { makeStyles } from '@material-ui/core/styles'
const drawerWidth= '240px'

const useStyles=makeStyles((theme)=>{
    return{

    drawer:{ 
        width: drawerWidth,
        flexShrink: 0,
        
        

    },
    listStyle3 : {
        background: '#fafa00',
        backgroundColor: 'red'
      },
    table: {
        minWidth: 500,
      },
    
    drawerPaper:{
        width: drawerWidth
 
    },
    toolbar:{
        marginLeft:'500px'
    },
    active:{
        background:'#f4f4f4'
    },
    date:{
        flexGrow: 1,
        marginRight:'40%'

    },
    title:{
        padding: theme.spacing(3)
    },
    root:{
        flexGrow: 1,
        backgroundColor:'#253053'
    },
    page:{
        display: "flex"
    },
    grid:{
        display:'flex'
    },
    appbar:{ 
        width:  `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        
    },
    toolbar:theme.mixins.toolbar,
    

        

    
};
}
);
export default useStyles;