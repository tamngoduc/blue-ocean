import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import banner1 from "src/assets/background/banner1.jpg";
import banner2 from "src/assets/background/banner2.jpg";
import banner3 from "src/assets/background/banner3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

const bannerList: string[] = [banner1, banner2, banner3];

const ImageSlider = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
      loop={true}
    >
      {bannerList.map((banner) => (
        <SwiperSlide key={banner}>
          <img src={banner} alt="banner" style={{ height: "85vh" }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
