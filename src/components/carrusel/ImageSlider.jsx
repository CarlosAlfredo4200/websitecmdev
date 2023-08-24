import { useEffect, useRef, useState } from "react";

const ImageSlider = ({ slides }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "white",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "white",
    zIndex: 1,
    cursor: "pointer",
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "50px",
    color: "white",
  };

  function goToPrevious() {
    const isFirtsSlide = currentIndex === 0;
    const newIndex = isFirtsSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    const isFirtsSlide = currentIndex === slides.length - 1;
    const newIndex = isFirtsSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() =>  {
     
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);
  });


  return (
    <>
      <div style={sliderStyles}>

        <div style={leftArrowStyles} onClick={goToPrevious}>
          &lt;
        </div>
        <div style={rightArrowStyles} onClick={goToNext}>
          &gt;
        </div>
        <div style={slideStyles}></div>
        <div style={dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              style={dotStyles}
              onClick={() => goToSlide(slideIndex)}
            >
              {" "}
              __{" "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
