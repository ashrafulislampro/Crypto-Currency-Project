import React from "react";
import { Container } from "react-bootstrap";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import logo1 from "../../images/logo01.png";
import logo2 from "../../images/logo02.png";
import logo3 from "../../images/logo03.png";
import logo4 from "../../images/logo04.png";
import logo5 from "../../images/logo05.png";
import logo6 from "../../images/logo06.png";
import "./OurPartners.css";

const OurPartners = () => {
  return (
    <section className="OurPartners_section">
      <Container>
        <h1
          className="text-center text-uppercase"
      >
          Our partners
        </h1>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={3}
          slidesPerView={5}
          loop={Infinity}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img className="slide_img" src={logo1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide_img" src={logo2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide_img" src={logo3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide_img" src={logo4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide_img" src={logo5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slide_img" src={logo6} alt="" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default OurPartners;
