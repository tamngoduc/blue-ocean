import { ImageSlider } from "src/components/ImageSlider";
import MainProduct from "./MainProduct";
import HotProduct from "./HotProduct";
import MidBanner from "./MidBanner";
import AboutUs from "./AboutUs";
import { Service } from "src/components/Service";

const Home = () => {
  return (
    <>
      <ImageSlider />

      <MainProduct />

      <HotProduct />

      <MidBanner />

      <AboutUs />

      <Service />
    </>
  );
};

export default Home;
