import { Swiper, SwiperSlide } from 'swiper/react';
import Banner1  from '../../assets/banner1.jpg'
import Banner2 from '../../assets/Banner2.jpg'
import Banner3 from '../../assets/Banner3.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='h-40 md:h-[400px] mt-12 rounded-lg'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='h-full w-full object-fill rounded-lg' src={Banner1} alt="Banner1" /></SwiperSlide>
        <SwiperSlide><img className='h-full w-full object-fill rounded-lg' src={Banner2} alt="Banner1" /></SwiperSlide>
        <SwiperSlide><img className='h-full w-full object-fill rounded-lg' src={Banner3} alt="Banner1" /></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Banner;