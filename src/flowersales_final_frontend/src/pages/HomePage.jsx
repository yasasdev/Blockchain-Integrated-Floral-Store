import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

const products = [
  {
    id: 1,
    name: 'Red Roses Bouquet',
    price: 29.99,
    image: 'https://source.unsplash.com/400x300/?rose'
  },
  {
    id: 2,
    name: 'Sunflower Bundle',
    price: 19.99,
    image: 'https://source.unsplash.com/400x300/?sunflower'
  },
  {
    id: 3,
    name: 'White Lily Bouquet',
    price: 24.99,
    image: 'https://source.unsplash.com/400x300/?lily'
  },
  {
    id: 4,
    name: 'Mixed Flowers',
    price: 34.99,
    image: 'https://source.unsplash.com/400x300/?flower'
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
          <p>Brighten your day with beautiful flowers!</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>

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
