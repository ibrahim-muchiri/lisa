import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux" ;
import './../App.css';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { decreaseCart, getTotals, addToCart } from '../features/CartSlice';
import { productsFetch } from '../features/ProductSlice';


export default function ProductItems() {       
  // const { products } = useSelector(state => state.products);  
  const [search, setSearch] = useState("");
  const cart = useSelector((state)=> state.cart);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

 
useEffect(()=> {
  dispatch(productsFetch());
}, [dispatch]);
  

  
  const handleDecreaseCart = (cartItem) => {
  dispatch(decreaseCart(cartItem));
  console.log(cartItem);
};

const handleIncreaseCart = (cartItem) => {
  dispatch(addToCart(cartItem));
  console.log(cartItem);
};
  
  return (
    <React.Fragment>
     <div className='app'> 
      <div className='rectangle'>

        <div className='search-rectangle'>
          
            <SearchIcon className='search-icon'/>
          
          <input type='text' style={{"border": "none"}} className='search-product' placeholder='Search products' onChange={(e) => {
                setSearch(e.target.value)
             }} />   
        </div>
        <h4 className='create-transaction'>Create transaction</h4>


        {cart.jsonData?cart.jsonData.filter((cartItem)=>{
                   return search.toLowerCase() === '' ? cartItem : cartItem.product_name.toLowerCase().includes(search);
                 }).map((cartItem) => ( 
                 <div className='display_item' key={cartItem.id}>

            <div className='product-items'>
                  <div className='product'>{cartItem.product_name}</div> 

               <div className=''>
                <button className='minus' onClick={() => handleDecreaseCart(cartItem)}>-</button>
               <span className='number'>{cartItem.cartQuantity}</span>
               <button className='plus' onClick={() => handleIncreaseCart(cartItem)}>+</button>
               </div>  
               </div> 
                        
               {/* <span className='kes'>KES - {item.selling_price}</span> */}
                           
               </div> 
             )): "No data found"}


         <div className='rectangle-total'>        
           <h5 className='total-amount'>Total amount</h5>
           <span className='kes'>KES- {}</span>

          {/* <div className='done-rectangle'> */}
          
           <div className='done-rectangle'>
             <button className='done-button'>Done
             <ArrowForwardIcon className='done-arrow'/> 
             </button>
           </div>
         </div>


        
       </div>
       </div>

    </React.Fragment>
  )
}
