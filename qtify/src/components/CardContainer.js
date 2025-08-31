import axios from "axios";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Cards from "./Cards"


const CardContainer = ({name})=>{
    
    const [allAlbums, setAllAlbums] = useState([]);
    const [allSongs, setAllSongs] = useState([]);
    const [showCarousel, setShowCarousel] = useState(false);
    
    useEffect(()=>{
        const loadAllAlbums = async ()=>{
            getAllAlbums();
        }

        loadAllAlbums();
    },[])

    const getAllAlbums = async () => {
    
        const url = "https://qtify-backend-labs.crio.do/albums/top"
        
        try {
            const getData = await axios.get(url);
            console.log(getData.data.length);
            setAllAlbums(getData.data);

            // console.log(getData.data[0]);
        } catch (error) {
            
        }
    }

    return(
        <Box sx={{ml:2, mr:2}}>
            <Box display="flex" sx={{alignItems:"center", justifyContent:"space-between"}}>
                <Button 
                    variant="showall" 
                    sx={{
                        color: "white",
                        fontFamily: "Poppins",
                        fontSize:"14px",
                        fontWeight:"600",
                        textTransform: "capitalize",
                        mr:2,
                    }}> 
                    {name}
                </Button>
                <Button 
                    variant="showall" 
                    sx={{
                        color: "#2fa343",
                        fontFamily: "Poppins",
                        fontSize:"14px",
                        fontWeight:"600",
                        textTransform: "capitalize",
                        mr:2,
                    }} 
                    onClick={()=>{setShowCarousel(prev => !prev)}}> 
                    Show all
                </Button>
            </Box>
            <Cards items={allAlbums}/>
        </Box>
        
        
    );

}

export default CardContainer;