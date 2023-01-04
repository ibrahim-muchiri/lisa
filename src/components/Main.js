import React, { useState, useEffect } from 'react';
import Product from './Product';
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


export default function Main(props) {    
    const { cartItems, product, onAdd, onRemove } = props;
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
    <div>
    
       {data.jsonData?data.jsonData.map((product) =>(
        <Product key={product.id} product={product}
            onAdd={onAdd} 
            onRemove={onRemove}
            item= {cartItems.find((x) => x.id === product.id)}
        ></Product>
       )): "No data found"}
    </div>
    
  )
}
