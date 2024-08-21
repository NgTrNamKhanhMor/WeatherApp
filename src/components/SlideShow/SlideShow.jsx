//Libraries
import Carousel from "react-bootstrap/Carousel";
//Hooks
import { useState } from "react";
//Components
import MainWeather from "~components/MainWeather/MainWeather";
import StyledCarouselItem from "~components/CarouselItem/CarouselItem";
import FutureWeather from "~components/FutureWeather/FutureWeather";

export default function SlideShow() {
  const [index, setIndex] = useState(0);
  const city = "New York";

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      data-bs-theme="dark"
      className="py-5"
    >
      <StyledCarouselItem>
        <MainWeather city={city} />
      </StyledCarouselItem>
      <StyledCarouselItem>
        <FutureWeather isHourly={true} city={city} />
      </StyledCarouselItem>
      <StyledCarouselItem>
        <FutureWeather isHourly={false} city={city} />
      </StyledCarouselItem>
    </Carousel>
  );
}
