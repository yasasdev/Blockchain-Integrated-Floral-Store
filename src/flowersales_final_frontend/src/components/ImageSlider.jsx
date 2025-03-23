import { useState, useEffect, useRef } from 'react';

/**
 * ImageSlider Component
 * A responsive, customizable image carousel with navigation controls
 * 
 * @param {Object} props Component properties
 * @param {Array} props.images Array of image objects with src and alt properties
 * @param {number} props.autoPlayInterval Time in ms between automatic slides
 * @param {boolean} props.showArrows Whether to display navigation arrows
 * @param {boolean} props.showDots Whether to display navigation dots
 * @param {boolean} props.autoPlay Whether to enable automatic sliding
 */
const ImageSlider = ({
  images = [],
  autoPlayInterval = 3000,
  showArrows = true,
  showDots = true,
  autoPlay = true
}) => {
  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Move to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Set up automatic sliding when component mounts
  useEffect(() => {
    if (autoPlay && images.length > 1) {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(nextSlide, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, autoPlayInterval, images.length]);

  // Pause autoplay when user interacts
  const pauseAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Resume autoplay after user interaction
  const resumeAutoPlay = () => {
    if (autoPlay && images.length > 1) {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(nextSlide, autoPlayInterval);
    }
  };

  // If no images are provided, display a placeholder
  if (images.length === 0) {
    return (
      <div className="slider-placeholder">
        <p>No images to display</p>
      </div>
    );
  }

  return (
    <div className="slider-container">
      {/* Slider Container */}
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img
              src={image.src || "/api/placeholder/400/300"}
              alt={image.alt || `Slide ${index + 1}`}
              className="slide-image"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      {showArrows && images.length > 1 && (
        <button
          className="arrow arrow-left"
          onClick={() => {
            prevSlide();
            pauseAutoPlay();
            resumeAutoPlay();
          }}
          aria-label="Previous slide"
        >
          <svg
            className="arrow-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Right Arrow */}
      {showArrows && images.length > 1 && (
        <button
          className="arrow arrow-right"
          onClick={() => {
            nextSlide();
            pauseAutoPlay();
            resumeAutoPlay();
          }}
          aria-label="Next slide"
        >
          <svg
            className="arrow-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Navigation Dots */}
      {showDots && images.length > 1 && (
        <div className="dots-container">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'dot-active' : ''}`}
              onClick={() => {
                goToSlide(index);
                pauseAutoPlay();
                resumeAutoPlay();
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;