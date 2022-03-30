import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RedditIcon from '@mui/icons-material/Reddit';



const Header = (props) => {
    return (
            <AppBar 
                position="static"
                style={{
                backgroundColor: "#FF5700",
                color: "#FFFFFF",
              }}>
                <div className='container'>
                    <Toolbar variant="dense">
                    <IconButton onClick={() => { window.location.href = '/'; }}edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <RedditIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Reddit analytics
                    </Typography>
                    </Toolbar>
                </div>
                
            </AppBar>
    )

}

export default Header