import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// import Swiper core and required modules
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css';


/**
 * @param Array items
 * items will collection of albums, songs
 */
const Cards = ({items=[], isAlbum}) => {
  return (
    <Swiper
        className='Carousel'
        modules={[Navigation]}
        spaceBetween={5}
        slidesPerView={"auto"}
        navigation
        breakpoints={{
            500: { slidesPerView: 2 },
            992: { slidesPerView: 4 },
            1500: { slidesPerView: 6 },
            1920: { slidesPerView: 8 },
        }}
    >
        {items.map((item)=>{ return (
            <>
                <SwiperSlide key={item.id}>
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
                </SwiperSlide>
            </>
            )
        })}
    </Swiper>
  );
};

export default Cards;