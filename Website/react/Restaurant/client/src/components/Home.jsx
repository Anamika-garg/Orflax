import React from 'react';

const Home = () => {
  return (
    <>
    <div className='container home-container'>
      <div className="home-text-sec home-container-child">
        <h1 className="main-heading">Order Tasty and fresh <br></br> food anytime!</h1>
        <div className="p-text">Just confirm your order and enjoy our delicious fatest delivery</div>

        <div className="btn-container">
          <button className="btn order-btn">Order Now</button>
          <div className="btn see-menu-btn">See Menu</div>
        </div>
      </div>
      <div className="home-img-sec home-container-child"></div>
    </div>
      {/* <img className='delieveryBoy' src="/delieveryBoy.png" alt="" /> */}
    </>
  )
}

export default Home