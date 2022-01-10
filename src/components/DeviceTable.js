import * as React from 'react'

import { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { PieChart, Pie} from 'recharts';
import db from '../Firebase';
import { useHistory } from 'react-router-dom'
import VisibilityIcon from '@material-ui/icons/Visibility';


import { Grid, Paper, Container, makeStyles } from '@material-ui/core'
  

const columns = [
  
    
    

  
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 100,
    max_width: 120 ,
    headerClassName:'header-name'
 },
  {
    field: 'Imei',
    headerName: 'Imei',
    width: 120,
    max_width: 150 ,
    headerClassName:'header-name'
    
  },
  {
    field: 'Entity',
    headerName: 'Entity',
    width: 120,
    max_width: 150 ,
    headerClassName:'header-name'
    
  },
  {
    field: 'Client',
    headerName: 'Client',
    type: 'number',
    width: 120,
    max_width: 150,
    headerClassName:'header-name' 
  
  },
  {
    field: 'Devicename',
    headerName: 'DeviceName',
    type: 'number',
    width: 120,
    max_width: 150 ,
    headerClassName:'header-name'
  
  },
  {
    field: 'Deviceid',
    headerName: 'DeviceId',
    type: 'number',
    width: 120,
    max_width: 150,
    headerClassName:'header-name' 
    
  },
  {
    field: 'Farmername',
    headerName: 'FarmerName',
    description: 'This column has a value getter and is not sortable.',
    
    width: 150,
    headerClassName:'header-name'
    
  },
];
const useStyles = makeStyles({
  rootcol: {
    "& .header-name": {
      backgroundColor: '#8860CD',
      fontSize:18,
      fontFamily: 'Poppins Regular',
      fontStyle:'bold',
    
    },
  },
});

const data = [
  {name: 'Geeksforgeeks', students: 400},
  {name: 'Technical scripter', students: 700},
  {name: 'Geek-i-knack', students: 200},
  {name: 'Geek-o-mania', students: 1000}
];
const editIcon = [(
  < VisibilityIcon  onClick={console.log("edited")}>
    
  </ VisibilityIcon >
)];



export default function DeviceTable() {
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

   const classes=useStyles();
  return (
    
        <Container maxWidth="lg"   >
          <div style={{ height: 100, width: '250%',marginLeft: '150px'}}  >
          <Grid container spacing={2} >
              <Grid item xs={9} className={classes.rootcol} >
                <DataGrid
                className='item'
                width={500}
                height={300}
                
                rows={editIcon}
                  rows={info}
                  columns={columns }
                  pageSize={4}
                  
                
                />
              
              </Grid>
              <Grid item xs={3} >
              
              <PieChart width={400} height={400}>
                <Pie data={data} dataKey="students" outerRadius={140} fill="lightgreen" />
              </PieChart>
            </Grid>
        </Grid>
        </div>
        </Container>
  );
}


