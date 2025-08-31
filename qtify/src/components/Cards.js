import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import Swiper core and required modules
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Box from '@mui/material/Box';


/**
 * @param Array items
 * items will collection of albums, songs
 */
const Cards = ({items=[]}) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={5}
      slidesPerView={5}
      navigation
    >
        {items.map((item)=>{ return (
            <>
                <SwiperSlide key={item.id}>
                   <Card sx={{ maxWidth: 245, height: 190 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={item.image}
                    />
                    <CardContent sx={{ textAlign: 'left' }}>
                        <Typography
                        sx={{
                            display: 'inline-block',
                            backgroundColor: 'black',
                            color: '#ffffffff',           // green font color
                            borderRadius: '9999px',     // makes capsule shape
                            px: 2,                     // horizontal padding
                            py: 0.5,                   // vertical padding for height
                            fontWeight: 'bold',
                            fontSize: '0.875rem',
                            userSelect: 'none'
                        }}
                        >
                        {item.follows} Follows
                        </Typography>
                    </CardContent>
                    </Card>
                    <Box display="flex">
                        <Typography sx={{color: '#ffffffff', }}>{item.title}</Typography>

                    </Box>
                </SwiperSlide>
            </>
            )
        })}
    </Swiper>
  );
};

export default Cards;