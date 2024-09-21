import React , {useState} from 'react'
import MenuCard from './MenuCard';
import { menuData } from '../../data';
import Item from './Item';
const Menu = () => {
    const [data , setData] = useState(menuData);
    const [selectedCat , setSelectedcat] = useState({category : 'All'});

    const setCategory = (cat) =>{
      setSelectedcat(cat);
      // console.log(cat)
    }

  return (
    <div className='container menu-container'>
        <div className="main-heading head-color head-size"> Our Menu </div>
        <div className="p-text">Enjoy Variety of Delicious Food Items</div>
        
    <div className='menuCard-container'>
        {
            data.map((e ) => {
                    return <MenuCard key={e.id} id={e.id} img={e.img} category={e.category} setCategory={setCategory}/>

            })
        }
        </div>


        {/* Items Section */}
        <Item category={selectedCat.category}/>

    </div>
  )
}

export default Menu