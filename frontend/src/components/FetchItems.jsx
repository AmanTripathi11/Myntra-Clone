import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemsActions } from '../store/itemsSlice';
import { fetchStatusActions } from '../store/fetchStatusSlice';

const FetchItems = () => {
  const backUrl = "https://myntra-clone-backend-izom.onrender.com"

   const fetchStatus =   useSelector(store=>store.fetchStatus)
   
   const dispatch=  useDispatch();
  //  console.log(fetchStatus);

   useEffect(() => {
    if(fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted())
    fetch(`{backUrl}/items`, { signal })
    .then((res) => res.json())
    .then(({items}) => {
      // console.log(items);
      dispatch(fetchStatusActions.markFetchDone());
      dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items));
        
      });

    return () => {
      // console.log("Cleaning up UseEffect.");
      controller.abort();
    };
  }, []);


  return (
    <>
      
    </>
    
  )
}

export default FetchItems
