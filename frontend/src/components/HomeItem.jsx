import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GrAddCircle } from 'react-icons/gr'
import { AiFillDelete } from 'react-icons/ai'
import { bagActions } from '../store/bagSlice';

const HomeItem = ({item}) => {

  const dispatch = useDispatch();
  const bagItems = useSelector(store=>store.bag);
  const elementFound = bagItems.indexOf(item.id)>=0;
console.log(elementFound);
  const handleAddToBag = ()=>{
      dispatch(bagActions.addToBag(item.id));
  }
  const handleRemoveFromBag = ()=>{
      dispatch(bagActions.removeFromBag(item.id));
  }
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
     
     {!elementFound?  (    <button  className="btn btn-success btn-add-bag" onClick={handleAddToBag}><GrAddCircle/>Add to Bag</button>)
      :(
      <button className="btn btn-danger btn-add-bag" onClick={handleRemoveFromBag}><AiFillDelete/>remove</button>)
     }
    </div>
  )
}

export default HomeItem