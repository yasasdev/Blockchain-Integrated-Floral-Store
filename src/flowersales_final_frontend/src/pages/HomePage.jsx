import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import AboutPage from './AboutPage';

const products = [
  {
    id: 1,
    name: 'Red Roses Bouquet',
    price: 29.99,
    image: '../public/images/01.jpg'
  },
  {
    id: 2,
    name: 'Sunflower Bundle',
    price: 19.99,
    image: '../public/images/02.jpg'
  },
  {
    id: 3,
    name: 'White Lily Bouquet',
    price: 24.99,
    image: '../public/images/03.jpg'
  },
  {
    id: 4,
    name: 'Mixed Flowers',
    price: 34.99,
    image: '../public/images/04.jpg'
  }
];

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="home-page">
        {/* Hero Section */}
        <div className="hero-section">
          <h1>Fresh Flowers Delivered to You</h1>
          <p className="para">Brighten your day with beautiful flowers!</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>

        {/* About Section */}
        <AboutPage />

        {/* Products Section */}
        <div className="products-section">
          {products.map((product) => (
            <Card 
              key={product.id} 
              image={product.image} 
              name={product.name} 
              price={product.price} 
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
