import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import EntityCard from '../components/EntityCard';
import db from '../Firebase';
function Entity() {
    const history = useHistory();
    const [info, setInfo] = useState([]);

    useEffect(() => {

        db.collection("entity").get().then((querySnapshot) => {
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
            db.collection("entity").where("Name","==",id).get()
            .then(qureySnapshot => {
                qureySnapshot.docs[0].ref.delete();
            })
        };
        const newDevices =info.filter(note => note.Name!=id)
        setInfo(newDevices)
}
       
    

    return (
        <>
            <h1>Entity Page</h1>


            <Grid container spacing={3}>
                <Grid item xs={12} >

                    <Button
                        onClick={() => history.push('/CreateEntityForm')}
                        type="submit"
                        color="secondary"
                        variant="contained"
                        endIcon={<KeyboardArrowRightIcon />}>
                        Create Entity
                    </Button>
                </Grid>
                {info.map(item => (
                    <Grid item xs={12} md={6} lg={4} key={info.Name}>
                        <EntityCard data={item} handleDelete={handleDelete} />
                    </Grid>
                ))}

            </Grid>

        </>
    )
}
export default Entity