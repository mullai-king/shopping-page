import React, { useState } from 'react';

const Card = ({ item, index ,cartCount,setCartCount}) => {
  let [cartStatus, setCartStatus] = useState(false);
  console.log(cartStatus, cartCount)
  const addToCart = (indexPos) => {
    setCartStatus(true);
    setCartCount((value) => value + 1)
  }
  const removeFromCart = (indexPos) => {
    setCartStatus(false);
    setCartCount((value) => value - 1)
  }
  return (
    <div>
      <div key={index} className="col mb-5">
        <div className="card h-100">
          {(item.sale) ?
            (<div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>) :
            ""
          }
          {/* <!-- Product image--> */}
          <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{item.productName}</h5>
              {/* Product review */}
              {(item.review > 0) ?
                (<div class="d-flex justify-content-center small text-warning mb-2">
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                </div>) : (<div class="bi-star-fill invisible"></div>)}
              {/* <!-- Product price--> */}
              {(item.oldPrice != "") ?
                (<span class="text-muted text-decoration-line-through">{item.oldPrice}</span>) : ""}
              {" " + item.price}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            {(!cartStatus) ? (<div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={() => addToCart(index)}>Add to cart</a></div>)
              : (<div className="text-center"><a className="btn btn-danger mt-auto" onClick={() => removeFromCart(index)}>Remove from cart</a></div>)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;