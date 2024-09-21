import React from 'react'

const MenuCard = ({img , category ,setCategory}) => {
  const fetchItemsForCat= (cat)=>{
    setCategory(cat);
  }
  return (
        <div className="menuCard" onClick={() => fetchItemsForCat({category})}>
            <div className="menu-img">
                <img src={img} alt="/" />
            </div>
            <div className="category-text">{category}</div>
        </div>
  )
}

export default MenuCard