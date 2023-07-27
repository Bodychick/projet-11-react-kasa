import React, { useState } from 'react';
import './carroussel.css'; 

function Carousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  var items = props.items;
  console.log(items)

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {items.length > 1 && (
          <>
            <i className="fa-solid fa-chevron-left buttonPrev" onClick={prevSlide}></i>
            <i className="fa-solid fa-chevron-right buttonNext" onClick={nextSlide}></i>
            <p className='numberDiapo'>{activeIndex + 1}/{items.length}</p>
          </>
        )}
            {
            items.map((item, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? 'carousel-slide active' : 'carousel-slide'}
                >
                    <img src={item} alt="Appartement" />

                </div>
            ))
        }
      </div>
      
    </div>
  );
};

export default Carousel;