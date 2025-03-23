import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import AboutPage from './AboutPage';
import ImageSlider from '../components/ImageSlider'; 

const HomePage = () => {
  const navigate = useNavigate();
  
  // Sample flower images for slider
  const flowerImages = [
    { 
      src: "../public/images/01.jpg", 
      alt: "Beautiful bouquet of mixed flowers" 
    },
    { 
      src: "../public/images/02.jpg", 
      alt: "Elegant rose arrangement"
    },
    { 
      src: "../public/images/03.jpg", 
      alt: "Seasonal flower selection"
    },
    { 
      src: "../public/images/04.jpg", 
      alt: "Special occasion bouquet"
    }
  ];

  return (
    <>
      <Header />
      <div className="home-page">
        {/* Hero Section */}
        <div className="hero-section">
          <h1>Fresh Flowers Delivered to You</h1>
          <p className="para">Brighten your day with beautiful flowers!</p>
          <button className="shop-now-btn" onClick={() => navigate('/products')}>Shop Now</button>
        </div>

        {/* Image Slider Section */}
        <div className="featured-section">
          <h2 className="section-title">Our Featured Arrangements</h2>
          <p className="section-description">Browse our most popular flower arrangements and bouquets</p>
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