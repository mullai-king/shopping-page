import React, { Component, useState } from 'react';
import Card from './Card';

const ProductCard = ({ setProducts, products ,setCartCount,cartCount}) => {
  

  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((item, index) => {
              return (
              
                  <>
                    <Card item={item} index={index} cartCount={cartCount} setCartCount={setCartCount} />
                  </>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;