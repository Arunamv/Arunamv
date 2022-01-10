import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import db from '../Firebase';
import DeviceTable from '../components/DeviceTable'
import DevicesCard from '../components/DevicesCard'
import VisibilityIcon from '@material-ui/icons/Visibility';



import { Paper } from '@material-ui/core'
function Devices() {
    const history = useHistory();
    const [info, setInfo] = useState([]);

    useEffect(() => {

        db.collection("devices").get().then((querySnapshot) => {
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr, data]);            });
        })

    }, [])

    const handleDelete = async (id) => {
            if(window.confirm("are you sure to drlete this record?")){
                db.collection("devices").where("Imei","==",id).get()
                .then(qureySnapshot => {
                    qureySnapshot.docs[0].ref.delete();
                })
            };
            const newDevices =info.filter(note => note.Imei!=id)
            setInfo(newDevices)
    }

    return (
        <>
            {/*<Grid container>
            <Grid item xs={12} sm={6} md={3}><DevicesCard /></Grid>
            <Grid item xs={12} sm={6} md={3}><DevicesCard /></Grid>
            <Grid item xs={12} sm={6} md={3}><DevicesCard /></Grid>
            <Grid item xs={12} sm={6} md={3}><DevicesCard /></Grid>
            </Grid>*/}
           
           
                    <Button 
                        onClick={() => history.push('/CreateDevices')}
                        type="submit"
                        color="secondary"
                        variant="contained"
                        endIcon={<KeyboardArrowRightIcon />}>
                        Create Device
                    </Button><br/>
                    
                
                <Grid item xs={12} lg={4}>
                        <DeviceTable  />
            
                    
                

            </Grid>
            
        </>
    )
}
export default Devices