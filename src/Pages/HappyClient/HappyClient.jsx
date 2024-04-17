import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import HappyClientCard from "../../Components/HappyClient/HappyClientCard";

// import "../styles.css";

const HappyClient = () => {
    const [review, setReview] = useState('')

    useEffect(() => {
        fetch('happyClient.json')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])

    let reviewSlides = null;

    if (review.length > 0) {
        reviewSlides = review.map(data => (
            <SwiperSlide key={data.id} className="border rounded-xl mr-4 pt-10 shadow-xl shadow-[#7A7A7A40]">
                <HappyClientCard data={data} />
            </SwiperSlide>
        ));
    }
  return (
    <div className=" mt-12 mb-12 p-4">
        <div className="mb-24 mt-12">
            <h1 className="text-4xl font-popi font-extrabold text-center">Happy Client</h1>
        </div>
      <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper h-96 w-full">
      {reviewSlides}
      </Swiper>
      
    </div>
  );
};

export default HappyClient;
