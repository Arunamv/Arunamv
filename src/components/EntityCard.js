import { Card,CardContent,CardHeader, IconButton, Typography } from "@material-ui/core";
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import db from '../Firebase'

function EntityCard({ data,handleDelete }) {
    
    return(
        <div>
            <Card elevation={3} style={{marginLeft:'100px'}}>
                <CardHeader
                action={
                    <IconButton onClick={() => handleDelete(data.Name)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title={data.Name}
                subheader={data.City} />
                <CardContent>
                    <Typography variant='body2' color='textsecondary'>
                        {data.Address}<br/>
                        {data.Parententity}<br/>
                        {data.State}<br/>
                    </Typography>
                </CardContent>

            </Card>
        </div>

    )
}
export default EntityCard