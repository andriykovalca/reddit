import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const InfoCard = (props) => {
    return (
        <div>
            <Paper elevation={3} sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 16 }} color="text.secondary">{props.statName}</Typography>
                    <Typography variant="h5" component="div">
                        {props.statValue}
                    </Typography>
                </CardContent>
            </Paper>
        </div>
    )
}

export default InfoCard