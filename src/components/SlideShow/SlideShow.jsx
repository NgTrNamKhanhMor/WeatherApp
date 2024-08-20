import Carousel from 'react-bootstrap/Carousel';
import MainWeather from '../MainWeather/MainWeather';
import { useState } from 'react';
import { StyledCarouselItem } from '../CarouselItem/CarouselItem.style';
import FutureWeather from '../FutureWeather/FutureWeather';

export default function SlideShow() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" className='py-5'>
       <StyledCarouselItem >
        <MainWeather/>
      </StyledCarouselItem>
      <StyledCarouselItem >
        <FutureWeather isHourly={true}/>
      </StyledCarouselItem>
      <StyledCarouselItem >
        <FutureWeather isHourly={false}/>
      </StyledCarouselItem>
      
    </Carousel>
  )
}
