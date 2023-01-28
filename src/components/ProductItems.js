import React, { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Product from './Product';
import { GlobalContext } from '../context/GlobalContext';
import './productItems.css';
import Pagination from './Pagination';


export default function ProductItems() {
  const { data, totalPagesNum, setCurrentPage, currentProduct, cartItems } = useContext(GlobalContext);   
  
//Calculating the total
  const totalAmount = cartItems.reduce(
    (acc, curItem) =>
      parseInt(acc) + curItem.quantity * parseInt(curItem.selling_price),
    0
  );
  console.log('The total amount is : ', totalAmount);

  return (
    <div className='app'>
      <div className='appItems'>
        <div className='search-rectangle'>
            <SearchIcon className='search-icon'/>
            <input type='text' className='search-bar' placeholder='Search products'/>
        </div>
        <div>
        <h3>Create a transaction</h3>
        <div>
          {data.map(dataProduct => (<Product key={dataProduct.id} dataProduct={dataProduct} /> ))}          
          </div>
        </div>

        <div className='tatal-rec'>
            <h5 className='h5'>Total amount</h5>
            <h3 className='totals'>KES {totalAmount}</h3>            
            <button className='done-rec'>Done</button>
        </div>
        <Pagination pages= { totalPagesNum } setCurrentPage={setCurrentPage} />
        </div>
    </div>
  )
}
