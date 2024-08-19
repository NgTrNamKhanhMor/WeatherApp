import Carousel from 'react-bootstrap/Carousel';
import MainWeather from '../MainWeather/MainWeather';
import { useState } from 'react';
import FiveHours from '../FiveHours/FiveHours';
import FiveDays from '../FiveDays/FiveDays';

export default function SlideShow() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
       <Carousel.Item >
        <MainWeather/>
      </Carousel.Item>
      <Carousel.Item>
          <FiveHours/>
      </Carousel.Item>
      <Carousel.Item>
        <FiveDays/>
      </Carousel.Item>
    </Carousel>
  )
}
