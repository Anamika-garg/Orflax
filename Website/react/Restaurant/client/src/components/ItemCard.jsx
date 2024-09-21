import React from 'react'

const ItemCard = ({itemName , desc }) => {
  return (
    <div className='ItemCard-div'>
        <div className="item-img-div"></div>
        <div className="title">{itemName}</div>
        <div className="desc">{desc.slice(0,40)}...</div>
        <div className="item-btn-container">
            <button className="btn item-cart-btn">Add to Cart</button>
            <div className="price-btn">₹190</div>
        </div>
    </div>
  )
}

export default ItemCard