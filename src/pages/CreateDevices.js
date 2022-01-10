import React, { useState } from "react"
import { Typography, Container, Button, Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'
import db from '../Firebase';



function CreateDevice() {
    
    const history = useHistory();

    const [deviceid, setDeviceId] = useState("");
    const [devicename, setDeviceName] = useState("");
    const [client, setClient] = useState("");
    const [farmername, setFarmerName] = useState("");
    const [clientaddress, setClientAddress] = useState("");
    const [farmeraddress, setFarmerAddress] = useState("");
    const [clientcontact, setClientContact] = useState("");
    const [farmercontact, setFarmerContact] = useState("");
    const [dateinstalled, setDateInstalled] = useState("");
    const [adharnumber, setAdharNumber] = useState("");
    const [entity, setEntity] = useState("");
    const [imei, setImei] = useState("");
    const [motormake,setMotorMake] = useState("");
    const [controllerrating,setControllerRating] = useState("");
    const [motorrating,setMotorRating] = useState("");
    const [motorpumptype,setMotorPumpType] = useState("");
    const [controllermake,setControllerMake] = useState("");
    const [pumphead,setPumpHead] = useState("");
    const [installedgps,setInstalledGps] = useState("");
    const [pvpanel,setPvPanel] = useState("");
    const [motorpumpcategory,setMotorPumpCategory] = useState("");
    const [pvpanelwattage,setPvPanelWattage] = useState("");
    const [pupmserial,setPumpSerial] = useState("");
    const [pvarraywattage,setPvArrayWattage] = useState("");
    const [motorserialnumber,setMotorSerialNumber] = useState("");
    const [noofpv,setNoofPv] = useState("");





    const handleSubmit = (evt) => {
        evt.preventDefault();
        //alert(`Device Name ${devicename}`)
        const deviceData = {
            Deviceid: deviceid,
            Devicename: devicename,
            Client: client,
            Farmername: farmername,
            Clientaddress: clientaddress,
            Farmeraddress: farmeraddress,
            Clientcontact: clientcontact,
            Farmercontact: farmercontact,
            Dateinstalled: dateinstalled,
            Adharnumber: adharnumber,
            Entity: entity,
            Imei: imei,
            id: imei,
            
            Motormake: motormake,
            Controllermake: controllermake,
            Motorrating: motorrating,
            Controllerrating: controllerrating,
            Pumphead: pumphead,
            Installedgps: installedgps,
            Motorpumptype: motorpumptype,
            Pvpanel: pvpanel,
            Motorpumpcategory: motorpumpcategory,
            Pvpanelwattage: pvpanelwattage,
            Pumpserial: pupmserial,
            ipvarraywattage: pvarraywattage,
            imotorserialnumber: motorserialnumber,
            inoofpv: noofpv,
        };
        db.collection("devices").doc(imei).set(deviceData)
        .then((docRef) => {
          alert("Data Successfully Submitted");
          history.replace('/devices')
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
  
    }
    return (
        <>
            <Container maxWidth="md">


                <form noValidate autoComplete="off"
                    onSubmit={handleSubmit} >

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                ADD NEW DEVICE
                                </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Device ID"
                                label="Device ID"
                                variant="outlined"
                                onChange={e => setDeviceId(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Display Name"
                                label="Display Name"
                                variant="outlined"
                                onChange={e => setDeviceName(e.target.value)} />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="h6">
                                FARMER DETAILS
                                </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Installed Client"
                                label="Installed Client"
                                variant="outlined"
                                onChange={e => setClient(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Farmer Name"
                                label="Farmer Name"
                                variant="outlined"
                                onChange={e => setFarmerName(e.target.value)}
                            />
                        </Grid>


                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Client Address"
                                label="Client Address"
                                variant="outlined"
                                onChange={e => setClientAddress(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Farmer Address"
                                label="Farmer Address"
                                variant="outlined"
                                onChange={e => setFarmerAddress(e.target.value)}
                            />
                        </Grid>


                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="Client Contact"
                                label="Client Contact"
                                variant="outlined"
                                onChange={e => setClientContact(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Farmer Contact"
                                label="Farmer Contact"
                                variant="outlined"
                                onChange={e => setFarmerContact(e.target.value)}
                            />
                        </Grid>


                        <Grid item xs={12} sm={6}>
                            <TextField style={{ width: '100%' }}
                                id="date"

                                type="date"
                                variant="outlined"
                                onChange={e => setDateInstalled(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Aadhar Number"
                                label="Aadhar Number"
                                variant="outlined"
                                onChange={e => setAdharNumber(e.target.value)}
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
                            <TextField fullWidth
                                id="Device IMEI"
                                label="Device IMEI"
                                variant="outlined"
                                onChange={e => setImei(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="h4">
                                Pump Detalis
                                </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Motor Make"
                                label="Motor Make"
                                variant="outlined"
                                onChange={e => setMotorMake(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Controller make"
                                label="Controll Make"
                                variant="outlined"
                                onChange={e => setControllerMake(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Motor Rating"
                                label="Motor Rating"
                                variant="outlined"
                                onChange={e => setMotorRating(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Controller Rating"
                                label="Controll Rating"
                                variant="outlined"
                                onChange={e => setControllerRating(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Pump Head"
                                label="Pump Head"
                                variant="outlined"
                                onChange={e => setPumpHead(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Installed Gps Location"
                                label="Installed Gps Location"
                                variant="outlined"
                                onChange={e => setInstalledGps(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Motor Pump Type"
                                label="Motor Pump Type"
                                variant="outlined"
                                onChange={e => setMotorPumpType(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="PV Panel Make"
                                label="PV Panel Make"
                                variant="outlined"
                                onChange={e => setPvPanel(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Motor Pump Catorgy"
                                label="Motor Pump Cateorgy"
                                variant="outlined"
                                onChange={e => setMotorPumpCategory(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="PV PAnel Wattage"
                                label="PV panel Wattage"
                                variant="outlined"
                                onChange={e => setPvPanelWattage(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Pump Serial Number"
                                label="Pump Serial Number"
                                variant="outlined"
                                onChange={e => setPumpSerial(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="PV Array Wattage"
                                label="PV Array Wattage"
                                variant="outlined"
                                onChange={e => setPvArrayWattage(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="Motor Serial Number"
                                label="Motor Serial Number"
                                variant="outlined"
                                onChange={e => setMotorSerialNumber(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="No Of PV Panel Connected"
                                label="No Of PV Panel Connected"
                                variant="outlined"
                                onChange={e => setNoofPv(e.target.value)}
                            />
                        </Grid>
                        
                        








                    </Grid>

                    <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                    >
                        Save
        </Button>
                </form>

            </Container>
        </>)
}

export default CreateDevice