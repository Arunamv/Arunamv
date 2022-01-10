import React, { useEffect, useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import EntityCard from '../components/UsersCard';
import db from '../Firebase';
import UserTable from '../components/UserTable'
function Users() {
    const history = useHistory();
    const [info, setInfo] = useState([]);

    useEffect(() => {

        db.collection("users").get().then((querySnapshot) => {
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr, data]);
            });
        })

    }, [])

    const handleDelete = async (id) => {
        if(window.confirm("are you sure to drlete this record?")){
            db.collection("users").where("Emailid","=",id).get()
            .then(qureySnapshot => {
                qureySnapshot.docs[0].ref.delete();
            })
        };
        const newDevices =info.filter(note => note.Emailid!=id)
        setInfo(newDevices)
}
    

    return (
        <>
            <h1>Users Page</h1>


            <Grid container spacing={3}>
                <Grid item xs={12} style={{marginTop:'-50px', marginRight:'60%'}}>

                    <Button
                        onClick={() => history.push('/UsersForm')}
                        type="submit"
                        color="secondary"
                        variant="contained"
                        endIcon={<KeyboardArrowRightIcon />}>
                           Users Entity
                    </Button>
                </Grid>
                
                    <Grid item xs={12} lg={4}>
                        <UserTable />
                    </Grid>
                

            </Grid>

        </>
    )
}
export default Users