import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
    // return a Promise containing the data we want
    return fetch("/products")
        .then((response) => response.json())
        .then(data => data);
});

const productsSlice = createSlice({
    name: "products",
    initialState: {
        entities: [], // array of products
        status: "idle", // loading state
    },
    reducers: {
        productAdded(state, action){
            state.entities.push(action.payload);
        },
        productRemoved(state, action){
            const index = state.entities.findIndex(p => p.id === action.payload)
            state.entities.splice(index, 1);
        },
        // productFilteredByCategory(state, action){
        //     console.log(action.payload)
        //     // const products = state.entities
        //     state.entities.find(p => p.categories.filter(c => c.id === action.payload))
        //     // .filter(p => p.categories.find(c => c.id === action.payload))
        //     // console.log(products)
        // }
    },
    extraReducers: {
        // handle async actions: pending, fulfilled, rejected (for errors)
        [fetchProducts.pending](state) {
            state.status = "loading";
        },
        [fetchProducts.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle";
        },
    },
});

export const { productAdded, productRemoved} = productsSlice.actions;
export default productsSlice.reducer;