import React from 'react'
import BagSummary from '../components/BagSummary'
import BagItem from '../components/BagItem'
import { useSelector } from 'react-redux'


const Bag = () => {

 const bagItems = useSelector(store=>store.bag);
  const items = useSelector(store=>store.items);
  const finalItems = items.filter(item=>{
    const itemInd = bagItems.indexOf(item.id);
    return itemInd>=0;
  })

  return (
         
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
        {finalItems.map(item=><BagItem item={item}/>)}
        </div>
        <BagSummary/>
        
        </div>

      
    </main>

  )
}

export default Bag