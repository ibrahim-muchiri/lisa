import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "../components/product.css";

export default function Product(props) {
    const { item, product, onAdd, onRemove } = props;


  return (
    <React.Fragment>    
        <div className='App'>
            <div className='App-rectangle'>
                <div className='search'>
                    <SearchIcon/>
                    <input type="text" placeholder='Search products'/>
                </div>                
                <h3>Create a transaction</h3>
                <div className='product'>{product.product_name}</div>
                
                <div>
                    
                {item ? (<div>                
                  <button className='minus' onClick={() => onRemove(item)}>-</button>
                <span className='number'>{item.qty}</span>
                <button className='plus' onClick={() => onAdd(item)}>+</button>
                </div>
                ) : (
                    <div>Nothing to dispaly</div>
                )}
                </div>
                

        <div className='rectangle-total'>        
           <h5 className='total-amount'>Total amount</h5>
           <span className='kes'>KES- {}</span>        
          
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
