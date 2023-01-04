// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const accessToken = "180|v0n3wJMC0ZC1PQbZ3ybMDzBPxNyPbXWn9FOgrbCW";
// const apiUrl = "https://live.phindor.com/phindor-api/public/api";

// const authAxios = axios.create({
//     baseURL: apiUrl,
//     headers: {
//         Authorization: `Bearer ${accessToken}`,
//     },
// });

// export const productsFetch = createAsyncThunk(
//     "products/productsFetch",
//     async(dispatch, getState) => {
//         const response =  await authAxios.get("/list-products/614")
//         return response.data;      
        
//     }
// )

// const ProductSlice = createSlice({
//     name: "product",
//     initialState: {
//         products: [],
//         status: null
//     },
//     // reducers: {},
//     extraReducers: {
//         [productsFetch.pending]: (state, action) =>{
//             state.status = "pending"
//         },
//         [productsFetch.fulfilled]: (state, action) =>{
//             state.status = "success";
//             state.products = action.payload
//         },
//         [productsFetch.rejected]: (state, action) =>{
//             state.status = "rejected"
//         }
//     }
// });

// export default ProductSlice.reducer;