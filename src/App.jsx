import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';


const App = () => {
  // Initialize product card detatils
  let priceCardsData = [
    { productName: "Macbook Air", price: "$40.00 - $80.00", oldPrice: "", sale: false, review: 0 },
    { productName: "Iphone", price: "$18.00", oldPrice: "$20.00", sale: true, review: 5 },
    { productName: "Apple Watch", price: "$25.00", oldPrice: "$50.00", sale: true, review: 0 },
    { productName: "Airpods", price: "$40.00", oldPrice: " ", sale: false, review: 5 },
    { productName: "AirTag", price: "$25.00", oldPrice: "$50.00", sale: true, review: 0 },
    { productName: "Macbook Pro", price: "$120.00 - $240.00", oldPrice: "", sale: false, review: 0 },
    { productName: "Apple Trackpad", price: "$18.00", oldPrice: "$20.00", sale: true, review: 5 },
    { productName: "Vision Pro", price: "$40.00", oldPrice: " ", sale: false, review: 5 }
  ]
  //assign product details and cartCount into useState 
  let [products, setProducts] = useState(priceCardsData);
  let [cartCount, setCartCount] = useState(0)
  
  return (
    <div>
      {/* rendor Components are NavBar,Header,ProductCard and Footer */}
      <Navbar cartCount={cartCount} />
      <Header />
      <ProductCard setProducts={setProducts} products={products} setCartCount={setCartCount} cartCount={cartCount} />
      <Footer />
    </div>
  );
};

export default App;