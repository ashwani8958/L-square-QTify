import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HeroSection = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Typography
                 sx={{
                    fontSize:"30px",
                    color:"white",
                    fontFamily: "Poppins",
                    fontWeight:600
                }}>
                 100 Thousand Songs, ad-free <br/> Over Thousands podcast episodes</Typography>
            <Box className="header-title" margin={2}>
                <img src="./assest/vibratingHeadphone.png" width="250px" height="250px" alt="Headphone-icon"></img>
            </Box>
        </Box>
    )
}

export default HeroSection;