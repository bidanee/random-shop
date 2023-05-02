import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import grocery from "../assets/carousel/grocery.jpg";
import randompick from "../assets/carousel/randompick.jpg";
import easy from "../assets/carousel/easy.jpg";
import { Link } from "react-router-dom";

const SlideCarousel = styled(Carousel)``;
const Slide = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42.75rem;
  scroll-snap-align: start;
`;
const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
  vertical-align: top;
`;
const Slider = () => {
  return (
    <SlideCarousel
      autoPlay
      showThumbs={false}
      interval={10000}
      showStatus={false}
      infiniteLoop={true}
    >
      <Slide to={"/choice"}>
        <Image src={grocery} />
      </Slide>
      <Slide to={"/choice"}>
        <Image src={easy} />
      </Slide>
      <Slide to={"/choice"}>
        <Image src={randompick} />
      </Slide>
    </SlideCarousel>
  );
};
export default Slider;
