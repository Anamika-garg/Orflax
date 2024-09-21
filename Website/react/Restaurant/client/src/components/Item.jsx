import React ,{useEffect, useState} from 'react'
import ItemCard from './ItemCard'
import {menuData} from '../../data'
import { CgColorBucket } from 'react-icons/cg';

const Item = ({category}) => {
  const [data , setData] = useState(menuData);
  const [cat , setCat] = useState('All');
  const myCat = category;
  const [catData , setCatData] = useState([]);
  const [showLess , setShowLess] = useState(true);
  
  const changeHandler = () =>{
    setShowLess(!showLess);
  }

  useEffect(()=>{
    setCat(cat => myCat);
  } , [myCat])

  useEffect(()=>{
    data.filter((e) => {
      if(e.category == cat){
        if(showLess){
          setCatData(cat => e.items.slice(0,3));
        }
        else{
          setCatData(e.items);
        }
      }
      else{
        return null;
      }
    })
  } ,[showLess , myCat ,cat] )

  
  return (
    <div className='item-container'>
      <div className="main-heading head-color text-center"> Items ({category})</div>
      <div className="item-card-container">
      {
        catData ? catData.map((e)=>{
          return <ItemCard key={e.id} itemName={e.title} desc={e.desc}/>
        }) : <></>
      }
    </div>
      <button className='showAll' onClick={changeHandler} >Show {showLess? 'All' : 'Less'}</button>
    </div>
  )
}

export default Item