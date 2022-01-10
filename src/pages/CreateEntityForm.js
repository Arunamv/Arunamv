import React, { useState } from "react"
import { Typography, Container, Button, Grid,MenuItem, FormControl,InputLabel,Select, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'
import db from '../Firebase';
import useStyles from "../components/MyStyle";


const useStyle=makeStyles()

 function CreateEntityForm() {
     const classes=useStyles()

    const history = useHistory();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [pin, setPin] = useState("");
    const [parententity, setParentEntity] = useState([]);
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    
    
    
    
    const handleSubmit = (evt) => {
        evt.preventDefault();


      const entityData= {
          Name: name,
          Address: address,
          Pin: pin,
          Parententity:parententity,
          State: state,
          City: city,

      };
      db.collection("entity").add(entityData)
        .then((docRef) => {
          alert("Data Successfully Submitted");
          history.replace('/entity')
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
    }
    return (
        
            <Container maxWidth="md"
            className={classes.grid}>


                <form noValidate autoComplete="off"
                    onSubmit={handleSubmit} >

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                ADD ENTITY DETAILS
                                </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Name"
                                label="Name"
                                variant="outlined"
                                onChange={e => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="State"
                                label="State"
                                variant="outlined"
                                onChange={e => setState(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Address"
                                label="Address"
                                variant="outlined"
                                onChange={e => setAddress(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="City"
                                label="city"
                                variant="outlined"
                                onChange={e => setCity(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
 {/* <TextField style={{ width: '100%' }}
                                id="State"
                                label="State"
                                variant="outlined"
                                onChange={e => setState(e.target.value)}
                                
                            />*/}
                            <FormControl fullWidth variant="outlined" style={{width:'100%'}}>

                            <InputLabel id="ParentEntity"  >ParenetEntity</InputLabel>
                            <Select
                            labelId="Entity"
                            id="Entity"
                            label="Entity"
                            
                            onChange={e => setParentEntity(e.target.value)}
                            >

                            <MenuItem value="KAR">KAR</MenuItem>    
                             </Select> 
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Pin"
                                label="Pin"
                                variant="outlined"
                                onChange={e => setPin(e.target.value)}
                            />
                        </Grid>
                       </Grid> 
                       <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                        >
                        Submit
                       </Button>
                       </form>
                       </Container>






    )
}

export default CreateEntityForm
