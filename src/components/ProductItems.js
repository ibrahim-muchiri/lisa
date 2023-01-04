import React, { useState, useEffect } from 'react';
import './../App.css';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios';


//Backend connection
const accessToken = "180|v0n3wJMC0ZC1PQbZ3ybMDzBPxNyPbXWn9FOgrbCW";
const apiUrl = "https://live.phindor.com/phindor-api/public/api";

const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
});


export default function ProductItems(props) {   
  const {cartItems, onAdd, onRemove} = props;    
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

 
  useEffect(() =>{
    authAxios.get("/list-products/614")           
    .then((res) => {
    
        console.log(res);
        setData(res.data)
        
    }).catch(err => {
        console.log(err)
    })
    
  }, []);

     
console.log("test", data);
if(data){
const {jsonData} = data;
console.log("test", jsonData);
}
  

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


        {data.jsonData?data.jsonData.filter((cartItem)=>{
                   return search.toLowerCase() === '' ? cartItem : cartItem.product_name.toLowerCase().includes(search);
                 }).map((cartItem) => ( 
                 <div className='display_item' key={cartItem.id}
                 item = {cartItems.filter((x) => x.id !== cartItem.id)}
                 onAdd= {onAdd}
                 onRemove={onRemove}
                 >

            <div className='product-items'>
                  <div className='product'>{cartItem.product_name}</div> 

               <div>
                
                  <div className='button'>
                  <button className='minus' onClick={() => onRemove(cartItem)}>-</button>
                <span className='number'>{1}</span>
                <button className='plus' onClick={() => onAdd(cartItem)}>+</button>
                </div>
                
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
