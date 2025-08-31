import Box from "@mui/material/Box";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import "./navbar.css";

const SearchBox = ()=>{
    return(
        <Box className="searchBox"
            sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid black',
                borderRadius: '8px',
                background: '#fff',
                px: 1,
                width: 500, 
                height: 48, 
            }}
            >
            <InputBase
                placeholder="Search a album of your choice"
                sx={{
                flex: 1,
                px: 1,
                }}
                inputProps={{ 'aria-label': 'search a album of your choice' }}
            />
           <Divider
                orientation="vertical"
                sx={{
                height: "100%",
                width: "1px",
                backgroundColor: 'black',
                mx: 1,
                }}
            />
            <SearchIcon />
        </Box>

    );
}

const Navbar = () => {
    
    return (
        <Box className="header">
            <Box className="header-title" margin={2}>
                <img src="./assest/headphoneSmall.png" alt="Headphone-icon"></img>
            </Box>
            <SearchBox />
            <Button
                variant="contained"
                sx={{
                    backgroundColor: "black",
                    color: "#2fa343",
                    fontFamily: "Poppins",
                    fontSize:"18px",
                    fontWeight:"600",
                    borderRadius: "12px",
                    textTransform: "capitalize",
                    mr:2,
                }}
            > Give Feedback
            </Button>
        </Box>
    )
}


export default Navbar;