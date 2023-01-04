import React, { useState } from "react";
import ProductItems from './components/ProductItems';
import Main from "./components/Main";


const App = () => { 
  // const [cartItems, setCartItems] = useState([]);
  // const { products} = Main;
  // const onAdd = (product) => {    
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     const newCartItems = cartItems.map((x) =>
  //     x.id === product.id ? { ...exist, qty: exist.qty + 1} : x
  //     );
  //     setCartItems(newCartItems);
  //   }
  //   else {
  //     const newCartItems = [ ...cartItems, { ...product, qty: 1}];
  //     setCartItems(newCartItems);
  //   }
  // };

  // const onRemove = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if(exist.qty === 1) {
  //     const newCartItems = cartItems.filter((x) => x.id !== product.id);
  //     setCartItems(newCartItems);
  //   }
  //   else{
  //     const newCartItems = cartItems.map((x) =>
  //     x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)
  //     setCartItems(newCartItems);
  //   }
  // }
  
  return (
   <div>
    <ProductItems/>
    
    {/* <Main cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products}/> */}
   </div>
  );
};

export default App;

