import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const CardsGrid = ({items = [], isAlbum}) => {
    return(
        <Grid container>
            {items.map((item)=>{return (
                <Grid item sx={{p:2}} key={item.id}>
                    <Card sx={{ width: 230, height: 190 }}>
                        <CardMedia
                            component="img"
                            alt={item.title}
                            height="145"
                            image={item.image}
                        />
                        <CardContent sx={{ textAlign: 'left', p:1}}>
                            <Typography
                            sx={{
                                display: 'inline-block',
                                fontFamily: "Poppins",
                                backgroundColor: 'black',
                                color: '#ffffffff',
                                borderRadius: '9999px',     // makes capsule shape
                                px: 2,                     // horizontal padding
                                py: 0.5,                   // vertical padding for height
                                fontWeight: 'bold',
                                fontSize: '0.875rem',
                                userSelect: 'none'
                            }}
                            >
                                {isAlbum ? `${item.follows} Follows` : `${item.likes} Likes`}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Box display="flex">
                        <Typography sx={{color: '#ffffffff', fontFamily: "Poppins",}} >{item.title}</Typography>
                    </Box>
                </Grid>
                )})
            }
        </Grid>
    );
}

export default CardsGrid;