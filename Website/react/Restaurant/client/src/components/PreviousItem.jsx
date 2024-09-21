import React from 'react'

const PreviousItem = ({itemName , itemDesc , img , date}) => {
  return (
    <div className="previous-item-div">
        <div className="previous-item-img-div"></div>
        <div className="title">{itemName}</div>
        <div className="desc">{itemDesc}</div>
        <div className="item-btn-container">
            <button className="btn item-cart-btn">Add to Cart</button>
            <div className="price-btn">₹190</div>
        </div>
        <div className="date-container">Ordered on {date}</div>
    </div>
  )
}

export default PreviousItem