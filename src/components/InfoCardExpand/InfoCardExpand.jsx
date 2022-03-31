import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  export default function InfoCardExpand(props) {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const items = props.expandedInfo;
  
    return (
      <Card elevation={3} sx={{ minWidth: 275 }}>
        <CardContent style={{position:'relative'}}>
            <Typography sx={{ fontSize: 16 }} color="text.secondary">{props.statName}</Typography>
            <Typography variant="h5" component="div">
                {props.statValue}
            </Typography>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            style={{position: 'absolute', bottom:'5px', right: '5px'}}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>

            {items.map((item, index) => {
                return (
                   <div key={index} style={{marginBottom:'20px'}}>
                    <Typography style={{margin:0}} paragraph>
                        {item.title}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {item.value}
                    </Typography>
                   </div>
                );
            })}
          </CardContent>
        </Collapse>
      </Card>
    );
  }