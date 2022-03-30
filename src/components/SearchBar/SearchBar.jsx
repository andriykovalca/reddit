import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';



const SearchBar = (props) => (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          onKeyPress={props.enterPress}
          id="input-with-sx"
          label="Enter reddit user name"
          variant="standard"
          onChange={props.textChange}
          style={{
            minWidth: '300px',
            marginRight: "10px",
          }}
        />
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          onClick={props.buttonClick}
          style={{
            backgroundColor: "#FF5700",
            color: "#FFFFFF",
          }}
        />
      </Box>
    </Box>
);

export default SearchBar;