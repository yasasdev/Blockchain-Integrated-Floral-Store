import { useState, useEffect, useRef } from 'react';  
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import AboutPage from './AboutPage';
import { useNavigate } from 'react-router-dom';

// Image Slider Component
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
      <div className="h-64 w-full flex items-center justify-center bg-gray-200 rounded">
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full flex-shrink-0">
            <img
              src={image.src || "/api/placeholder/400/300"}
              alt={image.alt || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      {showArrows && images.length > 1 && (
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
          onClick={() => {
            prevSlide();
            pauseAutoPlay();
            resumeAutoPlay();
          }}
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 text-gray-800"
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
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
          onClick={() => {
            nextSlide();
            pauseAutoPlay();
            resumeAutoPlay();
          }}
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 text-gray-800"
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
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              className={`mx-1 w-3 h-3 rounded-full focus:outline-none ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
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

const HomePage = () => {
  const navigate = useNavigate();
  
  // Sample flower images for slider
  const flowerImages = [
    { 
      src: "/images/flowers1.jpg", 
      alt: "Beautiful bouquet of mixed flowers" 
    },
    { 
      src: "/images/flowers2.jpg", 
      alt: "Elegant rose arrangement"
    },
    { 
      src: "/images/flowers3.jpg", 
      alt: "Seasonal flower selection"
    },
    { 
      src: "/images/flowers4.jpg", 
      alt: "Special occasion bouquet"
    }
  ];

  return (
    <>
      <Header />
      <div className="home-page">
        {/* Hero Section with Image Slider */}
        <div className="hero-section">
          <h1>Fresh Flowers Delivered to You</h1>
          <p className="para">Brighten your day with beautiful flowers!</p>
          <button className="shop-now-btn" onClick={() => navigate('/products')}>Shop Now</button>
        </div>

        {/* Image Slider Section */}
        <div className="slider-section">
          <h2>Our Featured Arrangements</h2>
          <ImageSlider 
            images={flowerImages}
            autoPlayInterval={5000}
            showArrows={true}
            showDots={true}
            autoPlay={true}
          />
        </div>

        {/* About Section */}
        <AboutPage />

      </div>
      <Footer />
    </>
  );
};

export default HomePage;