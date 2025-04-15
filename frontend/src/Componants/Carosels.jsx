import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { Box, Image } from "@chakra-ui/react";

const Carouselimage = [
  {
    image:
      "https://gardenguru.in/cdn/shop/files/best-in-class-hydroponics-nutrients-in-india.png?v=1647252142",
      id: 1,
  },
  {
    image:
      //"https://gardenguru.in/cdn/shop/files/best-in-class-hydroponics-nutrients-in-india.png?v=1647252142",
      "https://res.cloudinary.com/dzc7j0duu/image/upload/v1744648484/mango_ojgnzx.jpg",
      id: 2,
  },
  {
    image:
      //"https://gardenguru.in/cdn/shop/files/best-in-class-hydroponics-nutrients-in-india.png?v=1647252142",
      "https://res.cloudinary.com/dzc7j0duu/image/upload/v1744648563/banana_v8nuxr.jpg",
      id: 3,
  },
  {
    image:
      "https://gardenguru.in/cdn/shop/files/ShopifyCarouselFrontPage-940x303-lg.png?v=1647250959",
      
      id: 4,
  },
  {
    image:
      //"https://gardenguru.in/cdn/shop/files/ShopifyCarouselFrontPage-940x303-lg.png?v=1647250959",
   "https://res.cloudinary.com/dzc7j0duu/image/upload/v1744648733/img1_gzc7ge.webp",
      id: 5,
  },
];

export const Carousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,
    cssEase: "linear",
    // nextArrow: <ArrowRightIcon />,
    // prevArrow: <ArrowLeftIcon />,
    // // centerMode: true,
    // centerPadding: "60px",
  };
  return (
    <Box>
      <Slider {...settings}>
        {Carouselimage.map((item) => (
          <Box key={item.id}>
            <Image src={item.image} alt={item.id} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
