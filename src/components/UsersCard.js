import { Card,CardContent,CardHeader, IconButton, Typography } from "@material-ui/core";
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import db from '../Firebase'

function UsersCard({ data,handleDelete }) {
    
    return(
        <div>
            <Card elevation={1} style={{marginLeft:'130px'}}>
                <CardHeader
                action={
                    <IconButton onClick={() => handleDelete(data.Emailid)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title={data.Username}
                subheader={data.Emailid} />
                <CardContent>
                    <Typography variant='body2' color='textsecondary'>
                        {data.Password}
                    </Typography>
                </CardContent>

            </Card>
        </div>

    )
}
export default UsersCard