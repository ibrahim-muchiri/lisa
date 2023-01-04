// import React, { useState } from 'react';

// function Counter() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);
//   const [price, setPrice] = useState(0);
  
//   return (
//     <div>
//       <p>Quantity: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Add Quantity</button>
//       <button onClick={() => setCount(count - 1)}>Remove Quantity</button>
//       <p>Total: {(count * price).toFixed(2)}</p>
//     </div>
//   );
// }



// const handleAddProduct = (product) =>{
    // const ProductExist = count.find((item)=> item.id === product.id);
    // if(ProductExist){
    //   setCount(count.map((item) => item.id === product.id ?
    //   {...ProductExist, count: ProductExist.count + 1}: item));
    // } 
    // else {
    //   setCount([...count, {...product, count: 1}])
    // }
    // setCount(count + 1);


//   }

//   const handleRemoveProduct = (product) => {
    // const productExist = cart.find((item)=> item.id === product.id);
    //  if(productExist.quantity === 1){
    //   setCart(cart.filter((item) => item.id !== product.id));

    //  } else {
    //   setCart(cart.map((item)=> item.id === product.id 
    //    ? {...productExist, quantity: productExist.quantity - 1}
    //    : item
    //    ));
    //  }
    // setCount(count - 1);
//   }

  // //Price handle
//   const totalPrice = count.reduce(
    // (price, item) => price + item.quantity * item.price, 0
//   );



// const [count, setCount] = useState(0);
// const [search, setSearch] = useState("");
// const [price, setPrice] = useState(0);

// const cart = useSelector((state) => state.cart);
// const dispatch = useDispatch();

// const handleDecreaseCart = (cartItem) => {
//   dispatch(decreaseCart(cartItem));
// };


// const accessToken = "180|v0n3wJMC0ZC1PQbZ3ybMDzBPxNyPbXWn9FOgrbCW";
// const apiUrl = "https://live.phindor.com/phindor-api/public/api";

// const authAxios = axios.create({
//     baseURL: apiUrl,
//     headers: {
//         Authorization: `Bearer ${accessToken}`,
//     },
// });

//   useEffect(() =>{
//     authAxios.get("/list-products/614")           
//     .then((res) => {
    
//         console.log(res);
//         setData(res.data)
        
//     }).catch(err => {
//         console.log(err)
//     })
    
//   }, []);
     
// console.log("test", data);

// if(data){

// const {jsonData} = data;
// console.log("test", jsonData);
// }




//////////////////////////////////////////////////////////////////////
{/* <div className='app'> 
      <div className='rectangle'>

        <div className='search-rectangle'>
          
            <SearchIcon className='search-icon'/>
          
          <input type='text' style={{"border": "none"}} className='search-product' placeholder='Search products' onChange={(e) => {
                setSearch(e.target.value)
             }} />   
        </div>
        <h4 className='create-transaction'>Create transaction</h4>


        {products.jsonData?products.jsonData.filter((item)=>{
                   return search.toLowerCase() === '' ? item : item.product_name.toLowerCase().includes(search);
                 }).map((item) => ( 
                 <div className='display_item' key={item.id}>

            <div className='product-items'>
                  <div className='product'>{item.product_name}</div> 

               <div className=''>
                <button className='minus' onClick={() => (item)}>-</button>
               <span className='number'>{}</span>
               <button className='plus' onClick={() => (item, 1)}>+</button>
               </div>  
               </div> */}
                        //////////
               {/* <span className='kes'>KES - {item.selling_price}</span> */}
                           
//               </div> 
//             )): "No data found"}


// <div className='rectangle-total'>        
//           <h5 className='total-amount'>Total amount</h5>
//           <span className='kes'>KES - {}</span>
///////////
          {/* <div className='done-rectangle'> */}
          /////////////
    //       <div className='done-rectangle'>
    //         <button className='done-button'>Done
    //         <ArrowForwardIcon className='done-arrow'/> 
    //         </button>
    //       </div>
    //     </div>


        
    //   </div>
    //   </div>

////////////////////
//Redux
// const { products } = useSelector(state => state.products);  
//   const [search, setSearch] = useState("");
//   const cart = useSelector((state)=> state.cart);
  
//   const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(getTotals());
//   // }, [cart, dispatch]);

 
// useEffect(()=> {
//   dispatch(productsFetch());
// }, [dispatch]);
  

  
//   const handleDecreaseCart = (cartItem) => {
//   dispatch(decreaseCart(cartItem));
//   console.log(cartItem);
// };

// const handleIncreaseCart = (cartItem) => {
//   dispatch(addToCart(cartItem));
//   console.log(cartItem);
// };
///////////////////


