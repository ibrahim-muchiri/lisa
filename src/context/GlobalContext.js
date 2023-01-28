import React, { createContext, useReducer, useState, useEffect} from 'react';
import { AppReducer } from './AppReducer';
import axios from 'axios';


    // const initialValue = {
    //     products: [
    //         {id: 1, name: "sugar", price: 150},
    //         {id: 2, name: "sugar", price: 150},
    //         {id: 3, name: "sugar", price: 150}
    //     ]
    // }
    //Backend connection
    const accessToken = '180|v0n3wJMC0ZC1PQbZ3ybMDzBPxNyPbXWn9FOgrbCW';
    const apiUrl = 'https://live.phindor.com/phindor-api/public/api';

    const authAxios = axios.create({
    baseURL: apiUrl,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
});

    //create context
    export const GlobalContext = createContext();
    

    //Provider component
    export const GlobalProvider = ({children}) =>{
        const [state, dispatch] = useReducer(AppReducer);
        const [data, setData] = useState([]);
        const [cartItems, setCartItems] = useState([]); 
        const [currentPage, setCurrentPage] = useState(1)
        const [productPerPage] = useState(7);
        const [searchProduct, setSearchProduct] = useState('');
        let newOperationData = [];

        // Format items to add quantity which defaults to 1
            const formatItems = (data) => {
              data.map((item) => {
                item.quantity = 1;
              });
            };
   
        useEffect(() => {
            authAxios
              .get('/list-products/614')
              .then((res) => {
                formatItems(res.data.jsonData);
                setData(res.data.jsonData);
              })
              .catch((err) => {
                console.log(err);
              });
          }, []);
          if (data.jsonData) {
            newOperationData = [...data.jsonData];
          }

          //Actions
          const onAdd = (dataItem) => {
            const itemExists = cartItems
              ? cartItems.find((item) => item.id === dataItem.id)
              : null;
            if (itemExists) {
              setCartItems(
                cartItems.map((item) =>
                  item.id === dataItem.id
                    ? { ...itemExists, quantity: itemExists.quantity + 1 }
                    : item
                )
              );
            } else {
              setCartItems([
                ...cartItems,
                {
                  ...dataItem,
                  quantity: dataItem.quantity,
                  otherz: 'here we go',
                },
              ]);
            }
          };
          console.log('The cart items: ', cartItems);

          const onRemove = (dataItem) => {
            const itemExists = cartItems
              ? cartItems.find((item) => item.id === dataItem.id)
              : null;
            if (itemExists) {
              setCartItems(
                cartItems.map((item) =>
                  item.id === dataItem.id
                    ? {
                        ...itemExists,
                        quantity: itemExists.quantity > 0 ? itemExists.quantity - 1 : 0,
                      }
                    : item
                )
              );
            }
          };         

          // const searchItem = () => {
          //   dispatch( {
          //     type: 'SEARCH_ITEMS',
          //     payload: searchProduct
          //   })
          // }

          const indexOfLastProduct = currentPage * productPerPage;
          const indexOfFirstProduct = indexOfLastProduct - productPerPage;
          const currentProduct = data.slice(indexOfFirstProduct, indexOfLastProduct);
          const totalPagesNum = Math.ceil(data.length / productPerPage)

    return (<GlobalContext.Provider value={{
        // products: state.products,
        data,
        setData,
        onAdd,
        onRemove,
        newOperationData,
        cartItems,
        totalPagesNum,
        currentProduct,
        setCurrentPage,        
    }}>
        {children}
    </GlobalContext.Provider>);
  }

