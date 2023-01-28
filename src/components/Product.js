import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import './product.css';

export default function Product({dataProduct}) {  
  const {onAdd, onRemove, cartItems, currentProduct} = useContext(GlobalContext);
  // console.log(currentProduct);
  return (
    <div className='display-items'>
        <div className='product-items'>
            <div className="product">{dataProduct.product_name}
            <div className="buttons">
            <button className='minus' onClick={()=> {onRemove(dataProduct)}}>-</button>

            {cartItems.map((cartItem) =>
              cartItem.id === dataProduct.id ? (
                <span key={cartItem.id} className="number">
                  {cartItem.quantity}
                </span>
              ) : (
                ''
              )
            )}

            <button className='plus' onClick={() => {onAdd(dataProduct)}}>+</button>
            </div>
            </div>
        </div>
    </div>
  )
}
