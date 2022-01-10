import React, { useState } from "react"
import { Typography, Container, Button, Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'
import db from '../Firebase';



 function UsersForm() {

    const history = useHistory();

    const [userfield, setUserField] = useState("");
    const [username, setUserName] = useState("");
    const [emailid, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [entity, setEntity] = useState("");
    const [role, setRole] = useState("");
    
    
    
    
    const handleSubmit = (evt) => {
        evt.preventDefault();


      const usersData= {
          Userfield: userfield,
          Username: username,
          Emailid: emailid,
          Password:password,
          Entity: entity,
          Role: role,
          id:emailid,

      };
      db.collection("users").add(usersData)
        .then((docRef) => {
          alert("Data Successfully Submitted");
          history.replace('/users')
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
    }
    return (
        
            <Container maxWidth="md">


                <form noValidate autoComplete="off"
                    onSubmit={handleSubmit} >

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                ADD USERS
                                </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Users Field"
                                label="Users Field"
                                variant="outlined"
                                onChange={e => setUserField(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Users Name"
                                label='Users Name'
                                variant="outlined"
                                onChange={e => setUserName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Email Id"
                                label="Email id"
                                variant="outlined"
                                onChange={e => setEmailId(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                //id="Paasword"
                                label="Password"
                                variant="outlined"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Entity"
                                label="Entity"
                                variant="outlined"
                                onChange={e => setEntity(e.target.value)}
                                
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Role"
                                label="Role"
                                variant="outlined"
                                onChange={e => setRole(e.target.value)}
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

export default UsersForm