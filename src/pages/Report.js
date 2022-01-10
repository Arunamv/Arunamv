import { Button } from "@material-ui/core";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'


function Report(){
    const today=new Date();
    const shoot=()=>{ 
        alert("Clicked me")
    }
    return(
        <div>
            <h1>Report Page</h1>
            
            <Button type='Report' onClick={shoot} 
            variant="contained" 
            color="secondary"
            endIcon={<KeyboardArrowRightIcon />}
            style={{marginRight:'60%', marginTop:"-10%"}}>Report</Button>
            
        </div>
    )
}
export default Report;