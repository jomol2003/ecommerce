import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroBanner = () => {
  const slides = [
    {
      id: 1,
      image: "https://media1.calvinklein.com/images/20260317/Site_Update/HP/HP_Spring_M.webp",
      alt: "Big Sale",
    },
    {
      id: 2,
      image: "https://byshree.com/cdn/shop/articles/New-Arrival.jpg?v=1697019308&width=2048",
      alt: "New Arrivals",
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/G/31/img2020/SPB/2026/JanLaunch/AFTakeover/New/SymbolPremium_Men._SX1035_QL85_.jpg",
      alt: "Men's Collection",
    },
    {
      id: 4,
      image: "https://in.louisvuitton.com/content/dam/lv/online/picture/asiapacific/2026/HP_SG_WOMEN_DENIM_MARCH26_DI3.jpg?wid=1440",
      alt: "Big Billion Days",
    },
  ];

  return (
    <div className="hero-banner-wrapper">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}               // Force one slide
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-container">
              <img
                src={slide.image}
                alt={slide.alt}
                className="hero-image"
              />
              <div className="image-overlay"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroBanner;