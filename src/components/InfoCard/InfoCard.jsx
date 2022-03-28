import Card from '@mui/material/Card';


const InfoCard = (props) => {
    return (
        <div>
            <Card>
                <span>{props.statName}</span>
                <span>{props.statValue}</span>
            </Card>
            
        </div>
    )
}

export default InfoCard