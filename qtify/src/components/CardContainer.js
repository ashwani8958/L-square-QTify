import axios from "axios";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import CardsCarousel from "./CardsCarousel"
import CardsGrid from "./CardsGrid";


const CardContainer = ({name, isAlbum})=>{
    
    const [allAlbums, setAllAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [allSongs, setAllSongs] = useState([]);
    const [allGeners, setAllGeners] = useState([]);
    const [showCarousel, setShowCarousel] = useState(true);
    
    useEffect(()=>{
        const loadAllAlbums = async ()=>{
            getAllAlbums();
        }
        loadAllAlbums();

        const loadNewAlbums = async ()=>{
            getNewAlbums();
        }
        loadNewAlbums();

        const loadAllSongs = async()=>{
            getAllSongs();
        }
        loadAllSongs();

        const loadAllGenres = async()=>{
            getAllGenres();
        }
        loadAllGenres();
    },[])

    const getAllAlbums = async () => {
    
        const url = "https://qtify-backend-labs.crio.do/albums/top"
        
        try {
            const getData = await axios.get(url);
            setAllAlbums(getData.data);
        } catch (error) {
            
        }
    }

    const getNewAlbums = async () => {
    
        const url = "https://qtify-backend-labs.crio.do/albums/new"
        
        try {
            const getData = await axios.get(url);
            setNewAlbums(getData.data);
        } catch (error) {
            
        }
    }
    
    const getAllSongs = async () => {
    
        const url = "https://qtify-backend-labs.crio.do/songs"
        
        try {
            const getData = await axios.get(url);
            setAllSongs(getData.data);
        } catch (error) {
            
        }
    }

    const getAllGenres = async () => {
    
        const url = "https://qtify-backend-labs.crio.do/genres"
        
        try {
            const getData = await axios.get(url);
            setAllGeners(getData.data);
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
                {
                    isAlbum ? <Button 
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
                    </Button> : null}
            </Box>
            { isAlbum ? 
                ( name === "Top Album" 
                    ? (showCarousel === true ?  <CardsCarousel items={allAlbums} isAlbum/> : <CardsGrid  items={allAlbums} isAlbum/> ) 
                    : (showCarousel === true ?  <CardsCarousel items={newAlbums} isAlbum/> : <CardsGrid  items={newAlbums} isAlbum/> )) 
                : (<CardsCarousel items={allSongs}/>)}
        </Box>
    );

}

export default CardContainer;